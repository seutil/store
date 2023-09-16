# Generated by Django 4.2.3 on 2023-09-03 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lawyer', '0005_remove_problem_files_file_problems'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='file',
            name='problems',
        ),
        migrations.AddField(
            model_name='problem',
            name='files',
            field=models.ManyToManyField(to='lawyer.file'),
        ),
    ]
