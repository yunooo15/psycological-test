'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import titleImg from '@/../public/0.start/title.svg';
import startBin from '@/../public/0.start/startBtn.png';
import circleImg from '@/../public/0.start/blur-circle-1.png';

export default function StartPage({nextStep}) {
    return (
        <>
            <MobileFrame>
                <div className='flex justify-center items-center flex-col gap-3 relative h-full'>
                    <Image className='absolute top-0 -translate-y-1/2' src={circleImg} alt='circle'></Image>
                    <div className='flex-1 flex flex-col justify-center items-center gap-3'>
                        <Image src={titleImg} alt='title'></Image>
                        <div className='leading-6 tracking-wide text-[#B95F0F] font-[500] text-center'>
                            有些人天生酥脆，有些人出爐時就塌了。
                            你努力發酵、翻滾、等待出爐，
                            結果還是變成一坨可頌災難。
                            沒關係，這世界不缺完美麵包，
                            缺的是——像你一樣軟爛卻獨特的存在。
                            現在，就來看看你是什麼等級的失控可頌吧。
                        </div>
                        <Image onClick={nextStep} src={startBin} alt='startBin'></Image>
                    </div>
                    <Image className='absolute bottom-0 translate-y-1/2' src={circleImg} alt='circle'></Image>
                </div>
            </MobileFrame>

        </>
    );
}
