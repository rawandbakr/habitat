import React from 'react'

export default function BlogPost() {
  return (
    <div className='bg-primary min-h-screen min-w-screen m-2 flex flex-col rounded-lg '>
      <div className=' flex flex-row justify-between'>
      <h1 className='m-3'>Post title</h1>
      <span className='m-3 opacity-40'>created at :time</span>
      </div>
     <img src={require('../imgs/img1.jpg')} alt='...' className='rounded max-h-60 md:max-h-96 object-cover m-2 '/>
     <p className='m-2 block'>
      Occaecat tempor adipisicing pariatur fugiat id. Proident dolor ullamco amet culpa laborum nulla. In commodo veniam occaecat labore officia voluptate ea labore irure.

Aute voluptate aliqua fugiat aliquip laboris dolor. Esse laborum aute mollit tempor ullamco laboris nulla ad. Est deserunt magna excepteur in sit sit. Non exercitation magna consequat consectetur eu ullamco exercitation laboris quis eiusmod. Fugiat proident laborum deserunt labore nostrud. Duis dolore incididunt cupidatat ullamco officia proident magna incididunt.

In dolor quis irure id aliquip labore. Aute laboris ex eu laboris aliqua incididunt incididunt pariatur irure mollit nisi eiusmod enim. Irure eu aliqua ex reprehenderit. Elit minim elit officia ex do. Magna exercitation ea et cupidatat voluptate eiusmod elit. Minim consequat anim esse velit in consectetur Lorem pariatur est ullamco ea do do culpa.
     </p>
     <span className='m-2 opacity-50'>user name</span>
     {/* comments section */}
     <span> comments</span>
    </div>
  )
}
