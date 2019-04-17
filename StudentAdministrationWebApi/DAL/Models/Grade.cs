﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdministrationWebApi.DAL.Models
{
    /// <summary>
    /// The grade class defines a student's grade in a course.
    /// </summary>
    public class Grade
    {
        /// <summary>
        /// A unique ID for the grade.
        /// </summary>
        public int Id;

        /// <summary>
        /// The ID of the relevant course.
        /// </summary>
        public int CourseId;

        /// <summary>
        /// The ID of the relevant student.
        /// </summary>
        public int StudentId;

        /// <summary>
        /// The grade the student has received in the course.
        /// </summary>
        public double Score;
    }
}
