# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-08-08 18:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chart', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('student_name', models.CharField(max_length=50)),
                ('maths_mark', models.FloatField()),
                ('physics_mark', models.FloatField()),
                ('grammer_mark', models.FloatField()),
            ],
        ),
        migrations.DeleteModel(
            name='Followers',
        ),
    ]
