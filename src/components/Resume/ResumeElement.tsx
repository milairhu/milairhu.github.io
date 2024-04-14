import React from 'react';

interface ResumeElementProps {
  title: string;
  date: string;
  content?: string[];
}

const ResumeElement: React.FC<ResumeElementProps> = ({ title, date, content }) => {

    return(
        <div className='space-y-2'>
            <div className='space-y-1'>
                <div className='text-base md:text-xl font-semibold'>{title}</div>
                <div className='text-sm md:text-base italic'>{date}</div>
            </div>
            <div className='text-sm md:text-base text-wrap text-gray-200 space-y-0.5'>
                {
                    content?.map((paragraph, index) => (
                        <div key={index}>· {paragraph}</div>
                    ))
                }
            </div>
        </div>
    )

}

export default ResumeElement;