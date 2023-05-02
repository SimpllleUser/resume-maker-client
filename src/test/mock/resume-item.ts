import { ResumeItem } from '@/types/data-managment.types';


export const resumeItem: ResumeItem = {
    color: {
        label: 'slate',
        bg: 'bg-slate-700',
        text: 'text-slate-700',
        code: '#334155'
    },
    font: {
        label: 'Pop',
        value: 'font-pop'
    },
    elements: [
        {
            name: 'Skill',
            component: 'resume-skills',
            id: 'a8b85dc2-b1c2-4f4a-b504-bc9a6fc21122',
            title: ''
        },
        {
            name: 'Education',
            component: 'resume-education',
            id: 'cf1eb8ee-a5a4-48de-b69d-753b42a6b348',
            title: ''
        },
        {
            name: 'Experiance',
            component: 'resume-experiance',
            id: 'cc5242ef-a583-4768-b0a5-7c16506ba1dc',
            title: ''
        },
        {
            name: 'about',
            component: 'resume-about',
            id: '873f6817-4922-4aa3-9dc4-5f895364186b',
            title: ''
        }
    ],
    content: {
        main: {
            img: '',
            fullName: 'Your full name',
            position: 'Your position',
            contacts: [
                {
                    icon: 'phone',
                    value: 'phone'
                },
                {
                    icon: 'envelope',
                    value: 'email'
                },
                {
                    icon: 'github',
                    value: 'link'
                },
                {
                    icon: 'phone',
                    value: 'empty icon'
                }
            ]
        },
        'dynamic': {
            'a8b85dc2-b1c2-4f4a-b504-bc9a6fc21122': {
                title: 'Skills',
                data: [
                    'Write example skill'
                ]
            },
            'cf1eb8ee-a5a4-48de-b69d-753b42a6b348': {
                title: 'Education',
                data: [
                    {
                        place: 'Where are you studied',
                        date: {
                            from: {
                                'month': '',
                                'year': ''
                            },
                            to: {
                                'month': '',
                                'year': ''
                            }
                        },
                        description: 'Write about your study'
                    }
                ]
            },
            'cc5242ef-a583-4768-b0a5-7c16506ba1dc': {
                title: 'Experiance',
                data: [
                    {
                        place: 'Where are you worked',
                        position: 'Wath did was your postion',
                        date: {
                            from: {
                                'month': '',
                                'year': ''
                            },
                            to: {
                                'month': '',
                                'year': ''
                            }
                        },
                        description: 'Write about your experiance'
                    }
                ]
            },
            '873f6817-4922-4aa3-9dc4-5f895364186b': {
                title: 'about',
                data: {
                    about: 'Some thing about you',
                    description: ''
                }
            }
        }
    },
    id: 'e506c25f-62ba-42f9-81d6-9ed924e4b6b2'
};