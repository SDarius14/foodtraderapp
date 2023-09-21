import {
  Text,
  Layout,
  Icon,
  Button,
  Select,
  SelectItem,
  IndexPath,
  ButtonGroup,
} from '@ui-kitten/components';
import React, { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';

const apples = require('../../assets/images/apples.png');
const greenApples = require('../../assets/images/green-apple2.png');

type Props = {};

const ProductList = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(0),
  );
  return (
    <Layout style={{ flex: 1, flexDirection: 'column' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Icon
          name="menu-2-outline"
          style={{ height: 30, width: 30, margin: 10 }}
        />
        <Icon
          name="search-outline"
          style={{ height: 30, width: 30, margin: 10 }}
        />
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text category="h2" status="warning">
          Products
        </Text>
      </View>
      <View>
        <Select
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}
          placeholder="Choose Country"
          style={{ maxWidth: 200, margin: 10 }}
        >
          <SelectItem title="Philippines" />
          <SelectItem title="Malaysia" />
        </Select>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ButtonGroup appearance="ghost" status="warning">
          <Button status="warning">All</Button>
          <Button>Apples</Button>
          <Button>Cattle Farming</Button>
          <Button>Food & Beverages</Button>
        </ButtonGroup>
      </ScrollView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#fffaf1',
            borderRadius: 30,
            paddingHorizontal: 20,
            gap: 10,
            margin: 20,
            paddingVertical: 10,
            shadowColor: 'black', // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow offset (iOS)
            shadowOpacity: 0.2, // Shadow opacity (iOS)
            shadowRadius: 4, // Shadow radius (iOS)
            elevation: 5, // Shadow elevation (Android)
          }}
        >
          <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
            <Icon
              name="heart"
              style={{
                height: 30,
                width: 30,
                margin: 10,
                tintColor: '#FF9500',
              }}
            />
          </TouchableOpacity>
          <Image
            source={apples}
            style={{
              height: 200,
              objectFit: 'contain',
              width: 200,
              alignSelf: 'center',
            }}
          />

          <Text category="h5" status="warning">
            Apple
          </Text>
          <Text category="p2" appearance="hint">
            Short Description
          </Text>
          <Text category="h6">$10.00</Text>
          <Button
            style={{ alignSelf: 'center', marginTop: 10 }}
            status="warning"
          >
            View Product
          </Button>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#fffaf1',
            borderRadius: 30,
            paddingHorizontal: 20,
            gap: 10,
            marginVertical: 20,
            paddingVertical: 10,
            shadowColor: 'black', // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow offset (iOS)
            shadowOpacity: 0.2, // Shadow opacity (iOS)
            shadowRadius: 4, // Shadow radius (iOS)
            elevation: 5, // Shadow elevation (Android)
          }}
        >
          <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
            <Icon
              name="heart"
              style={{
                height: 30,
                width: 30,
                margin: 10,
                tintColor: '#FF9500',
              }}
            />
          </TouchableOpacity>
          <Image
            source={greenApples}
            style={{
              height: 200,
              objectFit: 'contain',
              width: 200,
              alignSelf: 'center',
            }}
          />

          <Text category="h5" status="warning">
            Green Apple
          </Text>
          <Text category="p2" appearance="hint">
            Short Description
          </Text>
          <Text category="h6">$5.00</Text>
          <Button
            style={{ alignSelf: 'center', marginTop: 10 }}
            status="warning"
          >
            View Product
          </Button>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 20,
          marginHorizontal: 10,
          gap: 30,
        }}
      >
        <TouchableOpacity>
          <Icon
            name="home"
            style={{ height: 30, width: 30, tintColor: '#A8ABB4' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="grid-outline"
            style={{ height: 30, width: 30, tintColor: '#FF9500' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="shopping-cart-outline"
            style={{ height: 30, width: 30, tintColor: '#A8ABB4' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="person-outline"
            style={{ height: 30, width: 30, tintColor: '#A8ABB4' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="settings-outline"
            style={{ height: 30, width: 30, tintColor: '#A8ABB4' }}
          />
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default ProductList;
