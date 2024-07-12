'use client'
import React, { useState } from 'react';
import { teams } from './data'; // Ensure the path is correct
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image, { StaticImageData } from 'next/image';
import { Modal } from 'antd';

type Team = {
  id: number;
  name: string;
  description: string;
  principal: string;
  points: number;
  image: StaticImageData;
  image2: StaticImageData;
};

const TeamPage = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(teams[0] || null);
  const [open, setOpen] = useState(false)

  const handleTeamClick = (team: Team) => {
    setSelectedTeam(team);
  };

  return (
    <main className='w-full flex flex-col justify-center'>
      <Navbar />
     
      <div className=' w-full flex flex-col justify-center items-center'>
      <div className='w-[90%]'>
        <h1 className='my-6 uppercase text-[#101828] text-[28px] font-[600] text-left'>Teams information</h1>
        </div>
        <div className='w-[90%] flex justify-between gap-6'>
          {/* Teams */}
          <div className='w-1/6'>
            {teams.map((team, index) => (
              <div
                key={index}
                onClick={() => handleTeamClick(team)}
                className={`cursor-pointer p-2 ${
                  selectedTeam?.id === team.id ? 'bg-[#EF3133] text-white uppercase' : 'bg-white text-black uppercase'
                }`}
              >
             
                <p>{team.name}</p>
              </div>
            ))}
          </div>

          {/* Team Information */}
          <div className='w-1/2'>
            {selectedTeam ? (
              <div>
                <div className='w-full'>
                <Image src={selectedTeam.image} alt={selectedTeam.name} width={300} height={300} className='w-full'/>
                </div>
                <h2 className='text-[32px] text-[#344054] font-[600] text-center mt-2 uppercase'>{selectedTeam.name}</h2>
                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Team Members Information</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.description}</p>
                <div className='flex justify-between my-2'>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={200} /> 
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
                </div>
                </div>
                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Team Principal</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.description}</p>
                <div className='flex justify-between my-2'>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={200} /> 
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
                </div>
                </div>

                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Drivers</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.description}</p>
                <div className='flex justify-between my-2'>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={200} /> 
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
                </div>
                </div>

                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Team Performance</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.description}</p>
                <div className='flex justify-between my-2 gap-4'>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={200} /> 
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
                </div>
                </div>
              </div>
            ) : (
              <p>Select a team to view their information.</p>
            )}
          </div>

          {/* Standings */}
          <div className='w-1/5 border px-2 text-left h-[500px]'>
            <h3 className='uppercase text-center text-[#000000] font-[600] text-[16px] px-2'>Standings</h3>
            <div className='w-full uppercase flex justify-between my-2 text-[#667085] text-[14px] font-[600]'>
                <div  className='flex gap-6'>
                <p>#</p>
                <p>Team</p>
                </div>
                <p>points</p>
            </div>
            <div className=''>
              <div className='' >
                {teams.map((team, index) => (
                  <div key={index} className='text-[14px] font-[400] text-[#101828] py-1 border-b  flex justify-between w-full text-left'>
                    <div className='flex gap-6'>
                    <div>{index + 1}</div>
                    <div>{team.name}</div>
                    </div>
                    <div>{team.points}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className='w-full flex mt-6 justify-center '>
            <button 
            onClick={()=> setOpen(true)}
            className='bg-[#fff] border-2 text-[#EF3133] border-[#EF3133] rounded-tl-[16px] rounded-br-[16px] flex w-[191px] h-[48px] items-center justify-center gap-2'>
             
             <p className='uppercase'>full standing</p>
           </button>
            </div>
            </div>
        </div>
      </div>
      <Modal
        title="Full Standings"
        visible={open}
        onCancel={() => setOpen(false)}
      >

      </Modal>
      <Footer />
    </main>
  );
};

export default TeamPage;
