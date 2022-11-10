import { Title } from './PageTitle.styled';

const PageTitle = ({ title, size }) => {
  return <Title size={size}>{title}</Title>;
};

export default PageTitle;
