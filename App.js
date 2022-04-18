import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity,Button } from 'react-native';
import { Ionicons,SimpleLineIcons,Feather,FontAwesome5,AntDesign,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import React, {useState} from 'react';

function voteFunction (){

  const [count, setCount] = useState(4);
  function incrementCount(){
    setCount(count + 1)
  }
}


export default function App() {

  return (
    
    <ScrollView>

      <View style={styles.main}>

      <View style={styles.bar}>
        <TouchableOpacity><View><Ionicons name="arrow-back" size={30} color='#fff' /></View></TouchableOpacity>
        <TouchableOpacity><Ionicons name="notifications-outline" size={24} color='#fff' /></TouchableOpacity>
        <TouchableOpacity><SimpleLineIcons name="options-vertical" size={24} color='#fff' /></TouchableOpacity>
      </View>

      <View style={styles.post}>
       <Image style={styles.displayPic}
        source={require('./assets/cc.png')}>
         </Image> 
       

         <View style={{justifyContent: 'space-between', width: '80%', marginTop: 8, flexDirection:'row'}}>
            <View>
            <View style={styles.subname}><Text style={{color: '#fff', fontWeight:'bold'}}>Ru/Mokoena</Text> </View>
            <View style={{flexWrap:'wrap'}}>
                  <Text style={{fontSize:10,color:'#7F8C8D'}}>posted 3h ago</Text>
            </View>
            </View>

          <View style={{flexDirection: 'row',flexWrap:'wrap', justifyContent: 'space-between'}}>

            <TouchableOpacity><View style={styles.join}><Text style={{color: '#fff',fontWeight:'bold'}}>Join</Text></View></TouchableOpacity>

          </View>

         

          </View>
          

      </View>

      <View style={{padding: 5, flexWrap:'wrap', flexDirection:'row'}}>
            <Text style={{color: '#fff'}}>Genysis Fx Now in Partnership with Exness..Traders from Lesotho have long awaited..
            <TouchableOpacity><Text style={{color: '#7F8C8D', fontWeight:'bold',fontSize:10}}>read more</Text></TouchableOpacity>
            </Text>
            <Image style={styles.contentPic} source={require('./assets/exness.jpg')}/>
          </View>
        
        <View style={styles.postActions}>
         
          <View style={styles.votes}>
            <TouchableOpacity><FontAwesome5 name="angle-double-up" size={24} color='#7F8C8D' /></TouchableOpacity>
            <Text style={{color: '#7F8C8D'}}>4</Text>
            <FontAwesome5 name="angle-double-down" size={24} color='#7F8C8D' />
            
          </View>
         

        <View style={styles.comments}>
        <Feather name="message-square" size={24} color='#7F8C8D' />
        <Text style={{color:'#7F8C8D'}}>7</Text>
        </View>

        <View style={styles.share}>
        <TouchableOpacity><AntDesign name="sharealt" size={24} color='#7F8C8D' /></TouchableOpacity>
        <Text style={{color: '#7F8C8D'}}>Share</Text>
        </View>

        <View style={styles.award}>
          <TouchableOpacity><AntDesign name="gift" size={24} color='#7F8C8D' /></TouchableOpacity>
          <Text style={{color: '#7F8C8D'}}>Award</Text>
        </View>
        
    
        </View>

        <View style={styles.topicsHeader}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#fff'}}>What do you want to see more of?</Text>
          </View>
            <TouchableOpacity><MaterialIcons name="cancel" size={24} color='#7F8C8D'/></TouchableOpacity>
        </View>

        <View style={styles.topics}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.subject1}><Text style={styles.subjectText}>Gaming</Text> <Image style={styles.gaming} source={require('./assets/joystick.png')}></Image></View>
          </View>

          <View style={{flexDirection: 'column'}}>
              <View style={styles.subject2}><Text style={styles.subjectText}>Entertainment</Text> <Image style={styles.gaming} source={require('./assets/laughing.png')}></Image></View>
          </View>

          <View style={{flexDirection: 'column'}}>
              <View style={styles.subject3}><Text style={styles.subjectText}>Art and Design</Text> <Image style={styles.gaming} source={require('./assets/art.png')}></Image></View>
          </View>

          <View style={{flexDirection: 'column'}}>
              <View style={styles.subject4}><Text style={styles.subjectText}>Hobbies</Text> <Image style={styles.gaming} source={require('./assets/dancer.png')}></Image></View>
          </View>

          <View style={{flexDirection: 'column'}}>
              <View style={styles.subject4}><Text style={styles.subjectText}>Gym</Text> <Image style={styles.gaming} source={require('./assets/sport.png')}></Image></View>
          </View>

          <View style={{flexDirection: 'column'}}>
              <View style={styles.subject4}><Text style={styles.subjectText}>Sports</Text> <Image style={styles.gaming} source={require('./assets/sport.png')}></Image></View>
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
            <Text style={{color: '#7F8C8D'}}>Choose topics</Text>
          </View>

          <TouchableOpacity><View style={{alignItems:'center', justifyContent:'center'}}><Ionicons name="chevron-forward" size={24} color='#7F8C8D' /></View></TouchableOpacity>
          
        </View>

        <View style={styles.usersCommentsHeader}>
          <MaterialCommunityIcons name="rocket" size={12} color='#7F8C8D' />
          <Text style={{color: '#7F8C8D', fontWeight:'bold',fontSize:10}}>BEST COMMENTS</Text>
          <TouchableOpacity><AntDesign name="down" size={12} color='#7F8C8D' /></TouchableOpacity>
        </View>

        <View style={styles.userComments}>

          <View style={styles.commenter}>

              <Image style={styles.gaming2} source={require('./assets/owl.jpg')}></Image>
              <Text style={{color:'#7F8C8D', marginLeft:5, fontWeight:'bold'}}>ChampagneLord</Text>
              <View style={{flexDirection:'row', justifyContent:'center'}}>
              <Text style={{color:'#7F8C8D',marginLeft:3}}>3min</Text>
             
              </View>
              <View>
                <Text style={{color:'#fff', marginBottom: 18}}>This has got be the greatest news ever..
                {'\n'}We will be trading confidently more than ever 
                {'\n'}#tradingforever #godblessthegodblessed</Text>
              </View>
              <View style={{alignItems:'flex-end'}}>
                
              </View>
              
          </View>
              
          </View>
        </View>

      <StatusBar style="auto" />
    
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000000',
    flex: 1,
    height: '100%'
    
  },

  bar: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '8%',
    backgroundColor:'#000',
    marginBottom:3


  },
  displayPic: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30,
    
    
  },
  post:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10
  },
  user: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff'
  },
  subname: {
    flexDirection: 'row',
    color: '#fff',
    
    
  },
  join:{
    backgroundColor: '#1877F2',
    height: 20,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentPic: {
    width:'100%',
    height: 230
  },

  postActions: {
    flexDirection: 'row', 
  },

  votes: {
    backgroundColor: '#111111',
    width: '25%',
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15

    
  },

  comments: {
    flexDirection: 'row',
    width: '25%',
    height: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#111111', 
    
   
  },
  share: {
    flexDirection: 'row',
    width: '25%',
    height: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#111111',   
  },

  award : {
    flexDirection: 'row',
    width: '25%',
    height: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#111111',   
  },

  topicsHeader: {
    backgroundColor: '#111111',
    marginTop: 10,
    width: '100%',
    height: 40,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },

  subject1: {
    height: 28,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#565454',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 2,
    flexDirection: 'row-reverse'
  },
  subject2: {
    height: 28,
    width: 124,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#565454',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 2,
    flexDirection: 'row-reverse'
  },

  subject3: {
    height: 28,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#565454',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 2,
    flexDirection: 'row-reverse'
  },

  subject4: {
    height: 28,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#565454',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 2,
    flexDirection: 'row-reverse'
  },

  subject5: {
    height: 28,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#565454',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 2,
    flexDirection: 'row-reverse'
  },

  topics : {
    backgroundColor: '#111111',
    width: '100%',
    height: 150,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row', 
    flexWrap: 'wrap'
  },

  subjectText: {
    color: '#fff'
  },
  gaming: {
    width: 17,
    height: 17,
    borderRadius: 30,
  },

  gaming2: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },

  usersCommentsHeader: {
    padding: 6,
    flexDirection: 'row'
  },
  userComments:{
    width:'100%',
    padding: 10,
    height:200,
    backgroundColor:'#111111',
    
  },

  commenter: {
    flexDirection:'row',
    flexWrap:'wrap',
    borderLeftWidth: 1,
    borderLeftColor:'#7F8C8D',
    marginLeft: 10,
    padding: 7,
    height: '100%'
  }

  
 
});
