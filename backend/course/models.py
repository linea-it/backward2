from django.db import models


class Subscription(models.Model):
    # Name
    name = models.CharField(
        verbose_name="Name",
        max_length=100,
    )

    # E-mail
    email = models.EmailField(
        verbose_name="E-mail",
        unique=True,
    )

    # Institute
    institute = models.CharField(
        verbose_name="Institute",
        max_length=150,
    )

    # State
    state = models.CharField(
        verbose_name="State",
        max_length=150,
    )

    # Creation Date
    creation_date = models.DateTimeField(
        verbose_name="Creation Date",
        auto_now_add=True,
    )
