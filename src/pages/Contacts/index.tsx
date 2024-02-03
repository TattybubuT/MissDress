import { Space, Typography } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as InstagramIcon } from './../../assets/img/icons/contactInsta.svg';
import { ReactComponent as TelegramIcon } from './../../assets/img/icons/telegramChat.svg';
import { ReactComponent as WhatsAppIcon } from './../../assets/img/icons/whatsappChat.svg';
import styles from './contacts.module.scss';

const { Title, Text } = Typography;
const Contacts: FC = () => {
	return (
		<div className={styles.contacts}>
			<Title level={1} className={styles.contactsTitle}>
				Контакты
			</Title>
			<Space direction='vertical' size={36} className={styles.contactWrapper}>
				<Text className={styles.telNumberWrapper}>
					Тел.: <span className={styles.telNumber}> +996712345678</span>
					<span className={styles.telNumber}> +996787654321</span>
				</Text>
				<Space.Compact direction='horizontal' className={styles.contactsItem}>
					<Link to={'/'}>
						<WhatsAppIcon width={55} className={styles.socialIcon} />
					</Link>
					<Title className={styles.telNumber}>+996712345678</Title>
				</Space.Compact>
				<Space.Compact direction='horizontal' className={styles.contactsItem}>
					<Link to={'/'}>
						<TelegramIcon width={55} className={styles.socialIcon} />
					</Link>
					<Title className={styles.telNumber}>+996712345678</Title>
				</Space.Compact>
				<Space.Compact direction='horizontal' className={styles.contactsItem}>
					<Link to={'/'}>
						<InstagramIcon className={styles.socialIcon} />
					</Link>
					<Title className={styles.telNumber}>@missdress</Title>
				</Space.Compact>
				<Space.Compact direction='horizontal' className={styles.contactsItem}>
					<Title className={styles.telNumberWrapper}>
						Email:
						<span className={styles.telNumber}>missdress@gmail.com</span>
					</Title>
				</Space.Compact>
				<Text className={styles.workDay}>
					Рабочие дни: Пн. - Пт.: с 10:00 до 20:00 Выходные дни: Сб-Вс
				</Text>
			</Space>
		</div>
	);
};

export default Contacts;
