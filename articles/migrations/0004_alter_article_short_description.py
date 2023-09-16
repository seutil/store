# Generated by Django 4.2.3 on 2023-09-13 20:01

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0003_alter_article_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='short_description',
            field=tinymce.models.HTMLField(default='a'),
            preserve_default=False,
        ),
    ]
