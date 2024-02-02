import React from 'react';
import Container from '../Container/Container';
import { FaHashtag } from "react-icons/fa";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";



const Innovation = () => {
    return (
        <div>
            <Container>
                <div className='bg-[#F6F4F2]'>
                    {/* all information */}
                    <div className='pt-[120px] pb-[120px]'>
                        <p className='font-dmSans text-[#5D423F] w-[40%] mx-auto text-center text-[23px] capitalize'>Where ideas ignite, innovation takes flight, breaking the old chains, in decentralized domains – we champion the creators, share ownerships, and decentralize the gains</p>
                        {/* 2part section  */}
                        <div className='grid grid-cols-2 mx-auto w-[50%]'>
                            <div className=''>
                                <div>
                                    <p className='font-dmSans text-[#441611] font-bold text-[36px]'>20 Million USD+</p>
                                    <p className='font-inter text-[#5D423F] text-[18px]'>Investment in USD</p>
                                </div>
                                <div>
                                    <span><PiCurrencyCircleDollarFill /></span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className='font-dmSans text-[#441611] font-bold text-[36px]'>20 Million USD+</p>
                                    <p className='font-inter text-[#5D423F] text-[18px]'>Investment in USD</p>
                                </div>
                                <div>
                                    <span><PiCurrencyCircleDollarFill /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Innovation;