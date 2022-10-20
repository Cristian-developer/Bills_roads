# Generated by Django 3.2.6 on 2022-10-18 23:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('departamento', models.CharField(max_length=50)),
                ('ciudad', models.CharField(max_length=50)),
                ('cod_departamento', models.CharField(max_length=10)),
                ('cod_ciudad', models.CharField(max_length=10)),
                ('descripcion', models.TextField()),
            ],
        ),
    ]