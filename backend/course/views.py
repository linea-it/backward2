import logging

from rest_framework import viewsets, status, serializers

from rest_framework.decorators import action
from rest_framework.response import Response

from course.models import Subscription
from course.serializers import SubscriptionSerializer

from common.notify import Notify

from django.http import HttpResponse
import csv


class SubscriptionViewSet(viewsets.ModelViewSet):

    # Disable authentication and permission for this view
    authentication_classes = []
    permission_classes = []

    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer

    # Return, by default, the display name
    # of the choice field (module_interest):
    module_interest = serializers.SerializerMethodField()

    def get_module_interest(self, obj):
        return obj.get_module_interest_display()

    filter_fields = ('id', 'name', 'email', 'institute',
                     'state', 'creation_date',)

    search_fields = ('id', 'name', 'email', 'institute',
                     'state',)
    ordering_fields = ('id', 'name', 'email', 'institute'
                       'state', 'creation_date',)
    ordering = ('id',)

    def create(self, request):
        logger = logging.getLogger('subscription')
        logger.info("".ljust(50, '-'))
        logger.info('Post subscription')

        # Get request data:
        subscription = request.data

        serializer = self.serializer_class(data=subscription)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        logger.info('Saved subscription')

        subscription_data = serializer.data

        # Get updated user by e-mail:
        user = Subscription.objects.get(email=subscription_data['email'])

        logger.debug(user)

        # Context: variables that will be available on the template
        context = dict({
            "name": user.name,
        })

        logger.debug(context)

        # Email notification:
        Notify().send_html_email(
            subject="Confirmação de Registro",
            to=user.email,
            template="confirmation.html",
            context=context)

        logger.debug('Email was sent')

        return Response(subscription_data, status=status.HTTP_201_CREATED)

    # Export participants to CSV:
    @action(detail=False, methods=['GET'])
    def to_csv(self, request, pk=None):
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="subscriptions.csv"'

        writer = csv.writer(response)

        writer.writerow([
            'id',
            'name',
            'email',
            'institute',
            'state',
            'creation_date',
        ])

        subscriptions = Subscription.objects.all().filter().values_list(
            'id',
            'name',
            'email',
            'institute',
            'state',
            'creation_date',
        )
        for subscription in subscriptions:
            writer.writerow(subscription)

        return response
