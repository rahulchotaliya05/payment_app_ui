import React from 'react';
import './Services.css';
import { service_list } from '../../assets/assets';

const Services = () => {
    return (
        <div className='service-display'>
            <h2 className='centered'>Top Services For You</h2>
            <div className="service-display-list">
                {
                    service_list.map((item, index) => {
                        return (
                            <div className='service-lists' key={index}>
                                <button>
                                    <img src={item.img} alt={item.name} />
                                    <p>{item.desc}</p>
                                </button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Services;
