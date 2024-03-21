import styled from 'styled-components/native';

export const CustomTabBar = styled.View`
  /* background-color: #fff; // Цвет фона вашей Bottom Bar
  padding-top: 10px; // Верхний отступ
  padding-bottom: 10px; // Нижний отступ
  flex-direction: row; // Расположение значков в ряд
  justify-content: space-between; // Распределение пространства между элементами */
`;

export const CustomTabBarButton = styled.TouchableOpacity`
  /* flex: 1; // Занимает все доступное пространство внутри родительского элемента
  align-items: center; // Выравнивание по центру по горизонтали */
`;

export const CustomTabBarIcon = styled.Image`
  /* width: 24px; // Ширина значка
  height: 24px; // Высота значка */
`;

export const CustomTabBarLabel = styled.Text`
  /* font-size: 12px; // Размер текста
  color: #333; // Цвет текста
  margin-top: 4px; // Отступ сверху */
`;
