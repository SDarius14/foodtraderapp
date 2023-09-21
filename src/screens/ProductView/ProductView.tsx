import { Button, ButtonGroup, Icon, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';

type Props = {};

const apples = require('../../assets/images/green-apple2.png');

const ProductView = (props: Props) => {
  return (
    <Layout style={{ flex: 1, flexDirection: 'column' }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#fffaf1',
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}
        >
          <Icon
            name="arrow-back-outline"
            style={{ height: 30, width: 30, tintColor: 'orange' }}
          />
          <Icon
            name="heart"
            style={{ height: 30, width: 30, tintColor: 'orange' }}
          />
        </View>
        <Text
          category="h2"
          status="warning"
          style={{ textAlign: 'center', marginTop: 10 }}
        >
          Green Qin Guan Apple
        </Text>
        <Image
          source={apples}
          resizeMode="contain"
          style={{
            height: 300,
            width: 'auto',
            marginHorizontal: 40,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white', // Background color of the login container
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderTopLeftRadius: 20, // Optional: Adjust these values to style your container
          borderTopRightRadius: 20, // Optional: Adjust these values to style your container
          marginTop: -20,
          gap: 20,
          shadowColor: 'black', // Shadow color
          shadowOffset: { width: 0, height: -5 }, // Shadow offset (iOS)
          shadowOpacity: 0.2, // Shadow opacity (iOS)
          shadowRadius: 4, // Shadow radius (iOS)
          elevation: 5, // Shadow elevation (Android)
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ margin: 5 }}>
            <Text category="label">Rating:</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name="star"
                style={{ height: 15, width: 15, tintColor: 'orange' }}
              />
              <Icon
                name="star"
                style={{ height: 15, width: 15, tintColor: 'orange' }}
              />
              <Icon
                name="star"
                style={{ height: 15, width: 15, tintColor: 'orange' }}
              />
              <Icon
                name="star"
                style={{ height: 15, width: 15, tintColor: 'orange' }}
              />
            </View>
          </View>

          <Text category="h3" status="warning">
            $ 10.00
          </Text>
        </View>

        <Text category="c2" appearance="hint">
          Savor the perfect sweetness of our Green Qin Guan Apple. Hand-picked
          at peak ripeness, its vibrant red hue delivers a balanced blend of
          tartness and sweetness. Ideal for snacking or culinary creations, it's
          the ultimate in fruity indulgence. Order now for a burst of freshness
          and flavor in every bite.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <TouchableOpacity>
              <Icon
                name="minus"
                style={{ height: 20, width: 20, tintColor: 'orange' }}
              />
            </TouchableOpacity>

            <Text category="c2" style={{ padding: 5 }}>
              01
            </Text>
            <TouchableOpacity>
              <Icon
                name="plus"
                style={{ height: 20, width: 20, tintColor: 'orange' }}
              />
            </TouchableOpacity>
          </View>
          <Text category="label" style={{ margin: 1 }}>
            Total: $ 10.00
          </Text>
        </View>
        <View
          style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}
        >
          <Button status="warning" appearance="outline">
            Add to Cart
          </Button>
          <Button status="warning">Order Now</Button>
        </View>

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
      </View>
    </Layout>
  );
};

export default ProductView;
