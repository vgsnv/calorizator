import palette from '../../../constants/palette';

import styled from 'styled-components/native';

export const ContainerItem = styled.TouchableOpacity`
  width: 50%;
  padding-top: 20px;
  padding-bottom: 0px;
  height: 150px;
  justify-content: space-around;
`;

export const Item = styled.View`
  flex: 1;
  padding: 16px;
  flex-direction: column;
  background-color: #f4f5f8;
  border-radius: 8px;
`;

export const TitleText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #a6a6bc;
`;

export const DetailText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Left = styled.View`
  flex: 3;
  align-items: flex-end;
  justify-content: center;
`;

export const KKText = styled.Text`
  font-size: 37px;
  font-weight: 600;
  text-align: right;
  color: #33333b;
`;

export const Right = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const NutrientText = styled.Text`
  font-size: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-weight: bold;
  text-align: right;
  color: #74757c;
`;
