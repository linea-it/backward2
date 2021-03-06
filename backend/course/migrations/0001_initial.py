# Generated by Django 3.1.5 on 2021-11-11 20:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Subscription',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Name')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='E-mail')),
                ('institute', models.CharField(max_length=150, verbose_name='Institute')),
                ('state', models.CharField(max_length=150, verbose_name='State')),
                ('creation_date', models.DateTimeField(auto_now_add=True, verbose_name='Creation Date')),
            ],
        ),
    ]
