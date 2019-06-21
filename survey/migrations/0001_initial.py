# Generated by Django 2.2.1 on 2019-05-25 09:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AgeFactor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age', models.IntegerField(default=0)),
                ('max_factor', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
        migrations.CreateModel(
            name='ClientSurvey',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age', models.PositiveSmallIntegerField(default=0)),
                ('annual_income', models.DecimalField(decimal_places=2, max_digits=13)),
                ('annual_expenses', models.DecimalField(decimal_places=2, max_digits=13)),
                ('assets', models.DecimalField(decimal_places=2, max_digits=13)),
                ('liabilities', models.DecimalField(decimal_places=2, max_digits=13)),
                ('existing_life_insurance', models.BigIntegerField()),
                ('existing_savings', models.BigIntegerField()),
                ('existing_critical_illness_cover', models.BigIntegerField()),
                ('existing_medical_insurance', models.BigIntegerField()),
                ('inflation', models.IntegerField()),
                ('retirement_age', models.PositiveSmallIntegerField()),
                ('child_age', models.PositiveSmallIntegerField()),
                ('undergrad_start_age', models.PositiveSmallIntegerField()),
                ('postgrad_start_age', models.PositiveSmallIntegerField()),
                ('fees_as_per_today', models.BigIntegerField()),
            ],
        ),
    ]
