import ReactDOM from 'react-dom';
import { ButtonComponent } from '../../../components/button/button';
import { PathComponent } from '../../../components/Path/Path';
import { IUsers } from '../../../models/User';
import { TDComponent } from '../components/td';
import { THComponent } from '../components/th';
import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';


type Props = {
    user: IUsers[];
}

const Users = (props: Props) => {
    return (
        <div className="table w-full p-2">
           <Link to={'/admin/user/add'}>
           <Button type="primary" style={{borderRadius: '5px'}}>Thêm Sản Phẩm</Button>
           </Link>
            {/* <div className="flex flex-nowrap p-3 m-2 bg-neutral-200">
                <PathComponent name1='Dashboard' name2='users' />
            </div> */}
            <table className="w-full border">
                <thead>
                <tr className="bg-gray-50 border-b">
                        <THComponent children="Id" />
                        <THComponent children="Name" />
                        <THComponent children="Email" />
                        <THComponent children="Image" />
                        <THComponent children="Action" />
                    </tr>
                </thead>
                <tbody>
                    {props.user.map((item, index) => {
                        return <tr className="bg-gray-100 text-center border-b text-sm text-gray-600"   >
                            <TDComponent children={index + 1} />
                            <TDComponent children={item.name} />
                            <TDComponent children={item.email} />
                            <TDComponent children={<img className=' w-20 h-20 ' src={item.image} alt="" />} />
                            <TDComponent children={<>
                                    <ButtonComponent customStyle="bg-blue-500 text-white" >Edit</ButtonComponent>
                                    <ButtonComponent customStyle="bg-red-500 text-white " >Remove</ButtonComponent>
                                </>} />
                                </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Users