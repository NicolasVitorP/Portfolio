
import React from 'react';
import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import { Button, Input, Form, message } from 'antd';
import { MailOutlined, SendOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const Contact = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        message.success('Obrigado! Sua mensagem foi simulada com sucesso.');
        console.log('Success:', values);
        form.resetFields();
    };

    return (
        <Section id="contact" title="Contato" subtitle="Vamos construir algo incrível juntos?">
            <div className="max-w-4xl mx-auto mt-8 flex flex-col md:flex-row gap-12">
                {/* Contact Info */}
                <div className="w-full md:w-1/3 space-y-8">
                    <div className="bg-[#121212] p-6 rounded-xl border border-white/5">
                        <h4 className="text-lg font-bold text-white mb-2">Email</h4>
                        <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-primary-light hover:text-primary transition-colors break-words">
                            {portfolioData.personalInfo.email || "Enviar Email"}
                        </a>
                    </div>

                    <div className="bg-[#121212] p-6 rounded-xl border border-white/5">
                        <h4 className="text-lg font-bold text-white mb-2">Social</h4>
                        <div className="flex flex-col gap-2">
                            <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full md:w-2/3 bg-[#121212] p-8 rounded-xl border border-white/5">
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        requiredMark={false}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Form.Item name="name" label={<span className="text-gray-300">Nome</span>} rules={[{ required: true, message: 'Por favor insira seu nome' }]}>
                                <Input placeholder="Seu nome" className="bg-black/20 border-white/10 text-white placeholder:text-zinc-600 hover:border-primary focus:border-primary h-10" />
                            </Form.Item>
                            <Form.Item name="email" label={<span className="text-gray-300">Email</span>} rules={[{ type: 'email', required: true, message: 'Por favor insira um email válido' }]}>
                                <Input placeholder="seu@email.com" className="bg-black/20 border-white/10 text-white placeholder:text-zinc-600 hover:border-primary focus:border-primary h-10" />
                            </Form.Item>
                        </div>

                        <Form.Item name="message" label={<span className="text-gray-300">Mensagem</span>} rules={[{ required: true, message: 'Por favor insira sua mensagem' }]}>
                            <TextArea rows={4} placeholder="Olá, gostaria de falar sobre..." className="bg-black/20 border-white/10 text-white placeholder:text-zinc-600 hover:border-primary focus:border-primary resize-none" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" icon={<SendOutlined />} size="large" className="w-full bg-primary hover:bg-primary-hover border-none h-12">
                                Enviar Mensagem
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
