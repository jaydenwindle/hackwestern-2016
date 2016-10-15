import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Container, Content, Tabs, Header, Title } from 'native-base';

import Timeline from '../Components/Timeline';
import Contacts from '../Components/Contacts';
import uplyncTheme from '../Themes/uplyncTheme';

render() {
  return(
    <Container>
      <Header>
        <Title>Add Contact</Title>
      </Header>
        <Content theme={ uplyncTheme }>
            
        </Content>
    </Container>
  )
}
