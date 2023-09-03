# Generated by Django 4.2.3 on 2023-09-02 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lawyer', '0003_alter_problem_files'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='file',
            field=models.FileField(upload_to='problems_docs'),
        ),
        migrations.RemoveField(
            model_name='problem',
            name='files',
        ),
        migrations.AddField(
            model_name='problem',
            name='files',
            field=models.ManyToManyField(to='lawyer.file'),
        ),
    ]