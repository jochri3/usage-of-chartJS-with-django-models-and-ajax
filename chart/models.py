from django.db import models

# Create your models here.
class Student(models.Model):
    student_name=models.CharField(max_length=50)
    maths_mark=models.FloatField()
    physics_mark=models.FloatField()
    grammer_mark=models.FloatField()

    def __str__(self):
        return self.student_name
