import CourseDetails from "../components/UI Elements/course-grades/CourseDetails";
import React from "react";

export interface Student {
    _id: any;
    name:string,
    surname:string,
    id:string,
    image:string,
    citizenshipId:string,
    registrationYear:string,
    Department:string,
    RegistrationType:string,
    EducationLevel:string,

    currentCourse1: string,
    currentCourseName1: string,
    currentCourse1Quiz: number,
    currentCourse1Homework: number,
    currentCourse1Project: number,
    currentCourse1Midterm: number,
    currentCourse1Final: number,
    currentCourse1Total: number,
    currentCourse1Makeup: number,
    currentCourse1FinalGrade: number,
    currentCourse1FinalLetterGrade: string,
    currentCourse1ClassAverage: number,
    currentCourse2: string,
    currentCourseName2: string,
    currentCourse2Quiz: number,
    currentCourse2Homework: number,
    currentCourse2Project: number,
    currentCourse2Midterm: number,
    currentCourse2Final: number,
    currentCourse2Total: number,
    currentCourse2Makeup: number,
    currentCourse2FinalGrade: number,
    currentCourse2FinalLetterGrade: string,
    currentCourse2ClassAverage: number,
    currentCourse3: string,
    currentCourseName3: string,
    currentCourse3Quiz: number,
    currentCourse3Homework: number,
    currentCourse3Project: number,
    currentCourse3Midterm: number,
    currentCourse3Final: number,
    currentCourse3Total: number,
    currentCourse3Makeup: number,
    currentCourse3FinalGrade: number,
    currentCourse3FinalLetterGrade: string,
    currentCourse3ClassAverage: number,
    currentCourse4: string,
    currentCourseName4: string,
    currentCourse4Quiz: number,
    currentCourse4Homework: number,
    currentCourse4Project: number,
    currentCourse4Midterm: number,
    currentCourse4Final: number,
    currentCourse4Total: number,
    currentCourse4Makeup: number,
    currentCourse4FinalGrade: number,
    currentCourse4FinalLetterGrade: string,
    currentCourse4ClassAverage: number,
    currentCourse5: string,
    currentCourseName5: string,
    currentCourse5Quiz: number,
    currentCourse5Homework: number,
    currentCourse5Project: number,
    currentCourse5Midterm: number,
    currentCourse5Final: number,
    currentCourse5Total: number,
    currentCourse5Makeup: number,
    currentCourse5FinalGrade: number,
    currentCourse5FinalLetterGrade: string,
    currentCourse5ClassAverage: number

    currentExam1: string,
    currentCourse1Day:string,
    currentCourse1Time:number,
    currentCourse1TimeEnd:number,
    currentExam2: string,
    currentCourse2Day:string,
    currentCourse2Time:number,
    currentCourse2TimeEnd:number,
    currentExam3: string,
    currentCourse3Day:string,
    currentCourse3Time:number,
    currentCourse3TimeEnd:number,
    currentExam4: string
    currentCourse4Day:string,
    currentCourse4Time:number,
    currentCourse4TimeEnd:number,
    currentExam5: string
    currentCourse5Day:string,
    currentCourse5Time:number,
    currentCourse5TimeEnd:number,

    takenCourse1: string
    takenCourseName1: string
    takenCourse1Quiz: number
    takenCourse1Homework: number
    takenCourse1Project: number
    takenCourse1Midterm: number
    takenCourse1Final: number
    takenCourse1Total: number
    takenCourse1Makeup: number
    takenCourse1FinalGrade: number
    takenCourse1FinalLetterGrade: string
    takenCourse1ClassAverage: number

    takenCourse2: string
    takenCourseName2: string
    takenCourse2Quiz: number
    takenCourse2Homework: number
    takenCourse2Project: number
    takenCourse2Midterm: number
    takenCourse2Final: number
    takenCourse2Total: number
    takenCourse2Makeup: number
    takenCourse2FinalGrade: number
    takenCourse2FinalLetterGrade: string
    takenCourse2ClassAverage: number

    takenCourse3: string
    takenCourseName3: string
    takenCourse3Quiz: number
    takenCourse3Homework: number
    takenCourse3Project: number
    takenCourse3Midterm: number
    takenCourse3Final: number
    takenCourse3Total: number
    takenCourse3Makeup: number
    takenCourse3FinalGrade: number
    takenCourse3FinalLetterGrade: string
    takenCourse3ClassAverage: number

    takenCourse4: string
    takenCourseName4: string
    takenCourse4Quiz: number
    takenCourse4Homework: number
    takenCourse4Project: number
    takenCourse4Midterm: number
    takenCourse4Final: number
    takenCourse4Total: number
    takenCourse4Makeup: number
    takenCourse4FinalGrade: number
    takenCourse4FinalLetterGrade: string
    takenCourse4ClassAverage: number

    takenCourse5: string
    takenCourseName5: string
    takenCourse5Quiz: number
    takenCourse5Homework: number
    takenCourse5Project: number
    takenCourse5Midterm: number
    takenCourse5Final: number
    takenCourse5Total: number
    takenCourse5Makeup: number
    takenCourse5FinalGrade: number
    takenCourse5FinalLetterGrade: string
    takenCourse5ClassAverage: number

    takenCourse6: string
    takenCourseName6: string
    takenCourse6Quiz: number
    takenCourse6Homework: number
    takenCourse6Project: number
    takenCourse6Midterm: number
    takenCourse6Final: number
    takenCourse6Total: number
    takenCourse6Makeup: number
    takenCourse6FinalGrade: number
    takenCourse6FinalLetterGrade: string
    takenCourse6ClassAverage: number

    takenCourse7: string
    takenCourseName7: string
    takenCourse7Quiz: number
    takenCourse7Homework: number
    takenCourse7Project: number
    takenCourse7Midterm: number
    takenCourse7Final: number
    takenCourse7Total: number
    takenCourse7Makeup: number
    takenCourse7FinalGrade: number
    takenCourse7FinalLetterGrade: string
    takenCourse7ClassAverage: number

    takenCourse8: string
    takenCourseName8: string
    takenCourse8Quiz: number
    takenCourse8Homework: number
    takenCourse8Project: number
    takenCourse8Midterm: number
    takenCourse8Final: number
    takenCourse8Total: number
    takenCourse8Makeup: number
    takenCourse8FinalGrade: number
    takenCourse8FinalLetterGrade: string
    takenCourse8ClassAverage: number

    takenCourse9: string
    takenCourseName9: string
    takenCourse9Quiz: number
    takenCourse9Homework: number
    takenCourse9Project: number
    takenCourse9Midterm: number
    takenCourse9Final: number
    takenCourse9Total: number
    takenCourse9Makeup: number
    takenCourse9FinalGrade: number
    takenCourse9FinalLetterGrade: string
    takenCourse9ClassAverage: number

    takenCourse10: string
    takenCourseName10: string
    takenCourse10Quiz: number
    takenCourse10Homework: number
    takenCourse10Project: number
    takenCourse10Midterm: number
    takenCourse10Final: number
    takenCourse10Total: number
    takenCourse10Makeup: number
    takenCourse10FinalGrade: number
    takenCourse10FinalLetterGrade: string
    takenCourse10ClassAverage: number

    takenCourse11: string
    takenCourseName11: string
    takenCourse11Quiz: number
    takenCourse11Homework: number
    takenCourse11Project: number
    takenCourse11Midterm: number
    takenCourse11Final: number
    takenCourse11Total: number
    takenCourse11Makeup: number
    takenCourse11FinalGrade: number
    takenCourse11FinalLetterGrade: string
    takenCourse11ClassAverage: number

    takenCourse12: string
    takenCourseName12: string
    takenCourse12Quiz: number
    takenCourse12Homework: number
    takenCourse12Project: number
    takenCourse12Midterm: number
    takenCourse12Final: number
    takenCourse12Total: number
    takenCourse12Makeup: number
    takenCourse12FinalGrade: number
    takenCourse12FinalLetterGrade: string
    takenCourse12ClassAverage: number

    takenCourse13: string
    takenCourseName13: string
    takenCourse13Quiz: number
    takenCourse13Homework: number
    takenCourse13Project: number
    takenCourse13Midterm: number
    takenCourse13Final: number
    takenCourse13Total: number
    takenCourse13Makeup: number
    takenCourse13FinalGrade: number
    takenCourse13FinalLetterGrade: string
    takenCourse13ClassAverage: number

    takenCourse14: string
    takenCourseName14: string
    takenCourse14Quiz: number
    takenCourse14Homework: number
    takenCourse14Project: number
    takenCourse14Midterm: number
    takenCourse14Final: number
    takenCourse14Total: number
    takenCourse14Makeup: number
    takenCourse14FinalGrade: number
    takenCourse14FinalLetterGrade: string
    takenCourse14ClassAverage: number

    takenCourse15: string
    takenCourseName15: string
    takenCourse15Quiz: number
    takenCourse15Homework: number
    takenCourse15Project: number
    takenCourse15Midterm: number
    takenCourse15Final: number
    takenCourse15Total: number
    takenCourse15Makeup: number
    takenCourse15FinalGrade: number
    takenCourse15FinalLetterGrade: string
    takenCourse15ClassAverage: number

    takenCourse16: string
    takenCourseName16: string
    takenCourse16Quiz: number
    takenCourse16Homework: number
    takenCourse16Project: number
    takenCourse16Midterm: number
    takenCourse16Final: number
    takenCourse16Total: number
    takenCourse16Makeup: number
    takenCourse16FinalGrade: number
    takenCourse16FinalLetterGrade: string
    takenCourse16ClassAverage: number

    takenCourse17: string
    takenCourseName17: string
    takenCourse17Quiz: number
    takenCourse17Homework: number
    takenCourse17Project: number
    takenCourse17Midterm: number
    takenCourse17Final: number
    takenCourse17Total: number
    takenCourse17Makeup: number
    takenCourse17FinalGrade: number
    takenCourse17FinalLetterGrade: string
    takenCourse17ClassAverage: number

    takenCourse18: string
    takenCourseName18: string
    takenCourse18Quiz: number
    takenCourse18Homework: number
    takenCourse18Project: number
    takenCourse18Midterm: number
    takenCourse18Final: number
    takenCourse18Total: number
    takenCourse18Makeup: number
    takenCourse18FinalGrade: number
    takenCourse18FinalLetterGrade: string
    takenCourse18ClassAverage: number

    takenCourse19: string
    takenCourseName19: string
    takenCourse19Quiz: number
    takenCourse19Homework: number
    takenCourse19Project: number
    takenCourse19Midterm: number
    takenCourse19Final: number
    takenCourse19Total: number
    takenCourse19Makeup: number
    takenCourse19FinalGrade: number
    takenCourse19FinalLetterGrade: string
    takenCourse19ClassAverage: number

    takenCourse20: string
    takenCourseName20: string
    takenCourse20Quiz: number
    takenCourse20Homework: number
    takenCourse20Project: number
    takenCourse20Midterm: number
    takenCourse20Final: number
    takenCourse20Total: number
    takenCourse20Makeup: number
    takenCourse20FinalGrade: number
    takenCourse20FinalLetterGrade: string
    takenCourse20ClassAverage: number
}

export interface Professor{

    _id: any;
    name:string,
    surname:string,
    mail:string,
    password:string,
    phone:number,
    department:string,

    currentCourse1: string,
    currentCourseName1: string,
    currentCourse2: string,
    currentCourseName2: string,
    currentCourse3: string,
    currentCourseName3: string,
    currentCourse4: string,
    currentCourseName4: string,
    currentCourse5: string,
    currentCourseName5: string,

    currentExam1: string,
    currentCourse1Day:string,
    currentCourse1Time:number,
    currentCourse1TimeEnd:number,
    currentExam2: string,
    currentCourse2Day:string,
    currentCourse2Time:number,
    currentCourse2TimeEnd:number,
    currentExam3: string,
    currentCourse3Day:string,
    currentCourse3Time:number,
    currentCourse3TimeEnd:number,
    currentExam4: string
    currentCourse4Day:string,
    currentCourse4Time:number,
    currentCourse4TimeEnd:number,
    currentExam5: string
    currentCourse5Day:string,
    currentCourse5Time:number,
    currentCourse5TimeEnd:number,

}

export type Document = {
    _id: string;
    studentName: string;
    studentSurname: string;
    docType: string;
    docLanguage: string;
    docCopies: number;
    docReason: string;
}

export type RecoverDoc = {
    _id: string;
    studentId: string;
    studentMail: string;
    securityQuestion: string;
    securityAnswer: string;
}

export type RegisterDoc = {
    _id: string;
    name: string,
    surname: string,
    mail: string,
    phone: number,
    studentId: string,
    citizenshipId: string,
    department: string,
    securityQuestion: string,
    securityAnswer: string,
}

