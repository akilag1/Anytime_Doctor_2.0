# Generated by Django 3.1.7 on 2021-05-06 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='hospital',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('location', models.CharField(max_length=300)),
                ('contact_no', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=200)),
                ('blood_count', models.BooleanField(default=False)),
                ('biopsy', models.BooleanField(default=False)),
                ('ecg', models.BooleanField(default=False)),
                ('ct_scan', models.BooleanField(default=False)),
                ('angiogram', models.BooleanField(default=False)),
                ('ultra_sound', models.BooleanField(default=False)),
                ('picture', models.ImageField(upload_to='photos/hospitals/')),
                ('description', models.TextField(blank=True)),
            ],
        ),
    ]
