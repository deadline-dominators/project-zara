import React,{useEffect, useState} from "react"
import axios from "axios"





const Account=(props)=>{
const [client,setClient]=useState([])
const userData = JSON.parse(localStorage.getItem('token'));
useEffect(()=>{
  getOneClient()
},[])

const getOneClient =async ()=>{
  try {
    const response = await axios.get(`http://localhost:3000/api/ecommerce/getEmail/${userData.email}`)
    console.log("again",response);
      setClient(response.data[0]) 
  } catch (error) {
    throw error
  }
}
console.log("je suis",client);
// getOneClient()

const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")
const [email,setEmail]=useState("")
const [currentPassword,setCurrentPassword]=useState("")
const [newPassword,setNewPassword]=useState("")
const [confirmPassword,setConfirmPassword]=useState("")
const [adress,setAdress]=useState("")
  
const  updateAccout=()=>{
    if(firstName==="" || lastName==="" || email==="" || currentPassword==="" || newPassword==="" || confirmPassword==="" || confirmPassword==="" || adress===""){
        alert("Please Enter your data ")
        return 
    } 
    if( props.dataClient.password!==currentPassword){
      
        alert("Wrong Password ")
        return 
    }  
     if(props.dataClient.password===currentPassword   && newPassword===confirmPassword){
        props.dataClient.password=newPassword
        props.dataClient.name=firstName+lastName
        props.dataClient.email=email
        return 
    }
}
    return (       
      <div
      style={{
        width: '870px',
        height: '630px',
        position: 'relative',
        background: 'white',
        boxShadow: '0px 1px 13px rgba(0, 0, 0, 0.05)',
        borderRadius: '4px',
        overflow: 'hidden',
        display: "flex",
       justifyContent:"flex-end",
       alignContent:"flex-end",
       left :"500px",
       top :"100px"   

      }}
    >
      <div
        style={{
          left: '80px',
          top: '40px',
          position: 'absolute',
          color: '#DB4444',
          fontSize: '20px',
          fontFamily: 'Poppins',
          fontWeight: '500',
          lineHeight: '28px',
          wordWrap: 'break-word',
        }}
      >
        Edit Your Profile
      </div>
      <div
        style={{
          left: '80px',
          top: '84px',
          position: 'absolute',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '50px',
          display: 'flex',
        }}
      >
        <div
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '8px',
            display: 'flex',
          }}
        >
          <div
            style={{
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '24px',
              wordWrap: 'break-word',
            }}
          >
            First Name
          </div>
          <div
            style={{
              width: '330px',
              height: '50px',
              position: 'relative',
            }}
          >
            <input
            defaultValue={client.name} 
              style={{
                
                width: '330px',
                height: '50px',
                left: '0px',
                top: '0px',
                position: 'absolute',
                background: '#F5F5F5',
                borderRadius: '4px',
              }}
            onChnage={(e)=>{
                setFirstName(e.target.value)
            }} ></input>
            
          </div>
        </div>
        <div
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '8px',
            display: 'flex',
          }}
        >
          <div
            style={{
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '24px',
              wordWrap: 'break-word',
            }}
          >
            Last Name
          </div>
          <div
            style={{
              width: '330px',
              height: '50px',
              position: 'relative',
            }}
          >
            <input  onChnage={(e)=>{
                setLastName(e.target.value)
            }} placeholder="  Rimel"
              style={{
                width: '330px',
                height: '50px',
                left: '0px',
                top: '0px',
                position: 'absolute',
                background: '#F5F5F5',
                borderRadius: '4px',
              }}
            ></input>
          
          </div>
        </div>
      </div>
      <div
        style={{
          left: '80px',
          top: '190px',
          position: 'absolute',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '50px',
          display: 'flex',
        }}
      >
        <div
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '8px',
            display: 'flex',
          }}
        >
          <div
            style={{
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '24px',
              wordWrap: 'break-word',
            }}
          >
            Email
          </div>
          <div
            style={{
              width: '330px',
              height: '50px',
              position: 'relative',
            }}
          >
            <input 
              defaultValue={client.email}
            onChnage={(e)=>{
                setEmail(e.target.value)
            }} placeholder=" rimel1111@gmail.com"
              style={{
                width: '330px',
                height: '50px',
                left: '0px',
                top: '0px',
                position: 'absolute',
                background: '#F5F5F5',
                borderRadius: '4px',
              }}
            ></input>
        
          </div>
        </div>
        <div
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '8px',
            display: 'flex',
          }}
        >
          <div
            style={{
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '24px',
              wordWrap: 'break-word',
            }}
          >
            Address
          </div>
          <div
            style={{
              width: '330px',
              height: '50px',
              position: 'relative',
            }}
          >
            <input   onChnage={(e)=>{
                setAdress(e.target.value)
            }}placeholder="   Kingston, 5236, United State"
              style={{
                width: '330px',
                height: '50px',
                left: '0px',
                top: '0px',
                position: 'absolute',
                background: '#F5F5F5',
                borderRadius: '4px',
              }}
            ></input>
            
          </div>
        </div>
      </div>
      <div
        style={{
          left: '80px',
          top: '296px',
          position: 'absolute',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '16px',
          display: 'flex',
        }}
      >
        <div
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '8px',
            display: 'flex',
          }}
        >
    
          <div
            style={{
              width: '710px',
              height: '50px',
              position: 'relative',
            }}
          >
            <input  onChnage={(e)=>{
                setCurrentPassword(e.target.value)
            }} placeholder=" Current Password"
              style={{
                width: '710px',
                height: '50px',
                left: '0px',
                top: '0px',
                position: 'absolute',
                background: '#F5F5F5',
                borderRadius: '4px',
              }}
            ></input>
      
          </div>
        </div>
        <div
          style={{
            width: '710px',
            height: '50px',
            position: 'relative',
          }}
        >
        <input  onChnage={(e)=>{
                setNewPassword(e.target.value)
            }} placeholder=  " New Password " 
            style={{
              width: '710px',
              height: '50px',
              left: '0px',
              top: '0px',
              position: 'absolute',
              background: '#F5F5F5',
              borderRadius: '4px',
            }}
          ></input>
       
        </div>
        <div
          style={{
            width: '710px',
            height: '50px',
            position: 'relative',
          }}
        >
          <input  onChnage={(e)=>{
                setConfirmPassword(e.target.value)
            }}placeholder=" Confirm new password"
            style={{
              width: '710px',
              height: '50px',
              left: '0px',
              top: '0px',
              position: 'absolute',
              background: '#F5F5F5',
              borderRadius: '4px',
            }}
          ></input>
         
        </div>
      </div>
      <div
        style={{
          left: '487px',
          top: '534px',
          position: 'absolute',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '32px',
          display: 'flex',
        }}
      >
        <div
          style={{
            color: 'black',
            fontSize: '16px',
            fontFamily: 'Poppins',
            fontWeight: '400',
            lineHeight: '24px',
            wordWrap: 'break-word',
          }}
         onClick={()=>{
            firstName="" 
             lastName=""  
             email="" 
             currentPassword=""
            newPassword="" 
            confirmPassword=""
            confirmPassword=""
            adress=""
         }}>
          Cancel
        </div>
        <div
          style={{
            paddingLeft: '48px',
            paddingRight: '48px',
            paddingTop: '16px',
            paddingBottom: '16px',
            background: '#DB4444',
            borderRadius: '4px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            display: 'flex',
          }}
        >
          <div
            style={{
              color: '#FAFAFA',
              fontSize: '16px',
              fontFamily: 'Poppins',
              fontWeight: '500',
              lineHeight: '24px',
              wordWrap: 'break-word',
            }}
            onClick={()=>{
                updateAccout()
            }} >
            Save Changes
          </div>
        </div>
      </div>
      {/* <div    style={{
        right:"900px",
              backgroundColor : 'black',
              width:"300px",
              height:"600px",
              position:"absolute",
              display:"flex",
              flexDirection:"column",
              justifyContent:"flex-start",
              alignContent:"flex-start",
            
            }}>



      </div> */}
    </div>
  
   )
}
export default Account