import React from 'react'
import {View,Text, SectionList, ScrollView,} from 'react-native'

const Sectionlist = () => {
  
    const userMultipleSkills = [
  { id: 1, name: "Aarav Sharma", data: ["React.js", "Node.js", "TypeScript"] },
  { id: 2, name: "Ananya Iyer", data: ["Java", "Spring Boot", "SQL"] },
  { id: 3, name: "Vivaan Verma", data: ["PHP", "Laravel", "MySQL"] },
  { id: 4, name: "Diya Patel", data: ["Python", "Django", "Machine Learning"] },
  { id: 5, name: "Kabir Singh", data: ["Node.js", "Express.js", "MongoDB"] },
  { id: 6, name: "Isha Gupta", data: ["Next.js", "Tailwind CSS", "GraphQL"] },
  { id: 7, name: "Arjun Reddy", data: ["C++", "Data Structures", "Algorithms"] },
  { id: 8, name: "Meera Nair", data: ["TypeScript", "Angular", "Firebase"] },
  { id: 9, name: "Rohan Das", data: ["Laravel", "Vue.js", "PostgreSQL"] }
];
  
    return (
        <View>
            <Text style={{fontSize:23}}>Section list and Recat-Native</Text>
            <ScrollView>

            <SectionList
            sections={userMultipleSkills}
            renderItem={({item})=><Text style={{fontSize:23, marginLeft:24}}>{item}</Text>}
            renderSectionHeader={({section:{name}})=>(
                <Text style={{fontSize:23, color:'red'}}>{name}</Text>
            )}
            />
            </ScrollView>
        </View>
    
  )
}

export default Sectionlist