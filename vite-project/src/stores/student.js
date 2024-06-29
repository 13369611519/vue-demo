import { defineStore } from 'pinia';

export const useStudentStore = defineStore('student', {
  state: () => {
    const defaultStudents = [
      { id: 220812002, name: 'MuiluhsneM', age: 18 },
      { id: 220812003, name: 'Pingu', age: 19 },
      { id: 220812004, name: '刘淑文', age: 20 }
    ];
    const storedStudents = localStorage.getItem('students');
    const students = storedStudents ? JSON.parse(storedStudents) : defaultStudents;

    // 如果 localStorage 为空，则初始化并保存默认数据
    if (!storedStudents) {
      localStorage.setItem('students', JSON.stringify(students));
    }

    return {
      students
    };
  },
  actions: {
    addStudent(student) {
      if (!this.validateUniqueId(student.id)) {
        throw new Error('学号已存在，请输入唯一的学号');
      }
      this.students.push(student);
      this.saveStudents();
    },
    deleteStudent(id) {
      this.students = this.students.filter(student => student.id !== id);
      this.saveStudents();
    },
    updateStudent(updatedStudent) {
      const index = this.students.findIndex(student => student.id === updatedStudent.id);
      if (index !== -1) {
        this.students[index] = updatedStudent;
        this.saveStudents();
      }
    },
    saveStudents() {
      localStorage.setItem('students', JSON.stringify(this.students));
    },
    validateUniqueId(id) {
      return !this.students.some(student => student.id === id);
    }
  }
});
