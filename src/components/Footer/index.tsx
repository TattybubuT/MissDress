import { Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as FaceBookIcon } from './../../assets/img/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from './../../assets/img/icons/instagram.svg';
import { ReactComponent as TelegramIcon } from './../../assets/img/icons/telegram.svg';
import { ReactComponent as WhatsAppIcon } from './../../assets/img/icons/whatsapp.svg';
import styles from './footer.module.scss';

interface IFooterItems {
	title: string;
	labels: string[];
}
interface IMobileFooter {
	label: string;
	href: string;
}
const { Title } = Typography;

const footerItems: IFooterItems[] = [
	{
		title: 'Покупателям',
		labels: ['Как сделать заказ', 'Способы оплаты', 'Доставка']
	},
	{
		title: 'Покупателям',
		labels: ['Возврат товара', 'Вопросы и ответы', 'Публичная оферта']
	},
	{ title: 'Компания', labels: ['О нас', 'Реквизиты', 'Контакты'] },
	{ title: 'Контакты', labels: ['Номер телефона', 'Email', 'Адрес'] }
];
const mobileFooterItems: IMobileFooter[] = [
	{ label: 'О нас', href: '/About' },
	{ label: '+996712345678', href: '/About' },
	{ label: 'missdress@gmail.com', href: '/About' },
	{ label: 'Исанова, 79', href: '/About' }
];

export const Footer: React.FC = () => (
	<div className={styles.footer}>
		<div className={styles.container}>
			<div className={styles.social}>
				<Link to={''}>
					<WhatsAppIcon className={styles.socialIcon} />
				</Link>
				<Link to={''}>
					<TelegramIcon className={styles.socialIcon} />
				</Link>
				<Link to={''}>
					<InstagramIcon className={styles.socialIcon} />
				</Link>
				<Link to={''}>
					<FaceBookIcon className={styles.socialIcon} />
				</Link>
			</div>
			<Row gutter={32} justify='space-between' className={styles.itemsFooter}>
				{footerItems.map((item, index) => (
					<Col key={index} className={styles.footerColumn}>
						<Title className={styles.title} level={3}>
							{item.title}
						</Title>
						{item.labels.map(label => (
							<Link to={''} key={label} className={styles.label}>
								{label}
							</Link>
						))}
					</Col>
				))}
			</Row>
			<Space size={15} direction='vertical' className={styles.mobileFooter}>
				{mobileFooterItems.map((item, index) => (
					<Link key={item.label} to={item.href} className={styles.label}>
						{item.label}
					</Link>
				))}
			</Space>
		</div>
	</div>
);
