import React, { useState, FormEvent } from 'react'

import './styles.css'
import PageHeader from '../../components/pageHeader'
import TeacherItem, {Teacher} from '../../components/teacherItem'
import Input from '../../components/input'
import Select from '../../components/select'
import api from '../../services/api'

function TeacherList(){

    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    const[teachers, setTeachers] = useState([])

    async function searchTeachers(e: FormEvent)
    {
        e.preventDefault();

        const response = await api.get('classes', {
            params:{
                subject,
                week_day,
                time,
            }
        })

        setTeachers(response.data);
    }

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select 
                value={subject}
                onChange={(e)=>{setSubject(e.target.value)}}
                name="subject" 
                label="Matéria"
                options ={[
                    { value: 'Artes', label:'Artes'},
                    { value: 'Biologia', label:'Biologia'},
                    { value: 'Ciências', label:'Ciências'},
                    { value: 'Física', label:'Física'},
                    { value: 'Geografia', label:'Geografia'},
                    { value: 'História', label:'História'},
                    { value: 'Matemática', label:'Matemática'},
                    { value: 'Educação Fisica', label:'Educação Fisica'},
                ]}
                />

                <Select 
                value={week_day}
                onChange={(e)=>{setWeekDay(e.target.value)}}
                name="week_day" 
                label="Dia da Semana"
                options ={[
                    { value: '0', label:'Domingo'},
                    { value: '1', label:'Segunda'},
                    { value: '2', label:'Terça'},
                    { value: '3', label:'Quarta'},
                    { value: '4', label:'Quinta'},
                    { value: '5', label:'Sexta'},
                    { value: '6', label:'Sabado'},
                 ]}
                />
                    <Input 
                    value={time}
                    onChange={(e)=>{setTime(e.target.value)}}
                    name ="time" 
                    label="Hora" 
                    type="time"/>

                    <button type='submit'> 
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher:Teacher) =>{
                    return <TeacherItem key={teacher.id} teacher={teacher}/>;
                })}
            </main>
        </div>
    )
}

export default TeacherList;