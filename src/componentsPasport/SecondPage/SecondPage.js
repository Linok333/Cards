import React from 'react';

import './SecondPage.css';

 const SecondPage = ({item}) => { 
 
      return (
      
        <div className="secondPage"  > 
        <div className="cod"> 
         <span className="text"> OPFRTSVFVF </span>
        </div>
           <div> <img  height="150px" width="150px"  src={item.image}/>  </div>

       <div  >
        <div  className="priz" className="border-line" > <span> {item.surName}  </span> </div>

        <div className="border-line" > <span> {item.firstName} </span>    </div>
        <div className="border-line" > <span>  {item.middleName}  </span></div>
        <div className="border-line" > <span>  {item.birthday}  </span></div>
        <div className="border-line" > <span>  {item.sex}   </span></div>
        <div className="border-line" > <span> {item.town}  </span></div>
        <div className="border-line" > <span>  {item.region}   </span></div>

        <div className="cherk"> 
          <img width="50px" height="50px" src="https://upload.wikimedia.org/wikipedia/commons/d/d7/%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE_%D0%9C%D0%B0%D1%80%D0%BA%D0%BE_%D0%9F%D0%B8%D0%BB%D0%B8%D0%BF%D0%BE%D0%B2%D0%B8%D1%87_%D0%B0%D0%B2%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84_1945.png" />
        </div>

      </div>
      </div>
      )
 }

 export default SecondPage