<template>
  <div class="student-list">
    <h1>同学列表</h1>
    <form @submit.prevent="addStudent" class="form">
      <input v-model="newStudent.name" placeholder="姓名" required />
      <input v-model.number="newStudent.age" placeholder="年龄" required />
      <button type="submit" class="btn btn-primary">新增同学</button>
    </form>
    <ul>
      <li v-for="(student, index) in students" :key="student.id">
        <span>{{ student.name }} - {{ student.age }}岁</span>
        <div class="button-group">
          <button @click="editStudent(student)" class="btn btn-primary">编辑</button>
          <button @click="confirmDelete(student.id)" class="btn btn-dark">删除</button>
        </div>
      </li>
    </ul>
    <div v-if="editingStudent" class="edit-form">
      <h2>编辑同学</h2>
      <form @submit.prevent="updateStudent">
        <input v-model="editingStudent.name" placeholder="姓名" required />
        <input v-model.number="editingStudent.age" placeholder="年龄" required />
        <button type="submit" class="btn btn-primary">更新同学</button>
        <button @click="cancelEdit" class="btn btn-secondary">取消</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStudentStore } from '../stores/student';
import Swal from 'sweetalert2';

const studentStore = useStudentStore();
const students = computed(() => studentStore.students);

const newStudent = ref({ name: '', age: null });
const editingStudent = ref(null);

function addStudent() {
  if (!newStudent.value.name || newStudent.value.age === null) {
    Swal.fire({
      icon: 'error',
      title: '请填写所有字段',
      showConfirmButton: false,
      timer: 1500
    });
    return;
  }

  const studentExists = students.value.some(student => student.name === newStudent.value.name);

  if (studentExists) {
    Swal.fire({
      icon: 'error',
      title: '同学名字已经存在',
      showConfirmButton: false,
      timer: 1500
    });
    return;
  }

  studentStore.addStudent({ ...newStudent.value });
  newStudent.value.name = '';
  newStudent.value.age = null;

  Swal.fire({
    icon: 'success',
    title: '新增成功',
    showConfirmButton: false,
    timer: 1500
  });
}

function confirmDelete(id) {
  Swal.fire({
    title: '确认删除?',
    text: "删除后将无法恢复!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '确认删除'
  }).then((result) => {
    if (result.isConfirmed) {
      studentStore.deleteStudent(id);
      Swal.fire(
        '删除成功!',
        '该同学信息已被删除.',
        'success'
      );
    }
  });
}

function editStudent(student) {
  editingStudent.value = { ...student };
}

function updateStudent() {
  if (editingStudent.value.name && editingStudent.value.age !== null) {
    studentStore.updateStudent(editingStudent.value);
    editingStudent.value = null;
    Swal.fire({
      icon: 'success',
      title: '修改成功',
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: '请填写所有字段',
      showConfirmButton: false,
      timer: 1500
    });
  }
}

function cancelEdit() {
  editingStudent.value = null;
}
</script>

<style scoped>
.student-list {
  max-width: 1400px;
  margin: 0 auto;
  padding: 50px;
  background: #343a40;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white;
}

h1 {
  color: #f8f9fa;
}

.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

input {
  padding: 20px;
  border: 1px solid #495057;
  border-radius: 5px;
  margin-right: 10px;
  background: #495057;
  color: white;
  flex: 1;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #495057;
  border: 1px solid #343a40;
  border-radius: 5px;
  margin-bottom: 10px;
}

li span {
  flex: 1;
}

.button-group {
  display: flex;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-primary {
  background-color: #6c757d;
  color: white;
}

.btn-primary:hover {
  background-color: #5a6268;
}

.btn-dark {
  background-color: #343a40;
  color: white;
  margin-left: 10px;
}

.btn-dark:hover {
  background-color: #23272b;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
  margin-left: 10px;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.edit-form {
  background: #343a40;
  padding: 20px;
  border: 1px solid #495057;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white;
}

.edit-form h2 {
  margin-bottom: 20px;
  color: #f8f9fa;
}
</style>
