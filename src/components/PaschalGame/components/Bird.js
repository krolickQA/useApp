import Matter from 'matter-js';
import React from 'react';
import { Image, View } from 'react-native';

function Bird(props) {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const { color } = props;

  return (
    <View style={{
      // borderWidth: 1,
      // borderColor: color,
      // borderStyle: 'solid',
      position: 'absolute',
      left: xBody,
      top: yBody,
      width: widthBody,
      height: heightBody,
    }}
    >
      <Image
        style={{
          width: '100%',
          height: '80%',
        }}
        source={require('../assets/flappyBird.png')}
      />
    </View>
  );
}

export default (world, color, pos, size) => {
  const initialBird = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: 'Bird' },
  );
  Matter.World.add(world, initialBird);

  return {
    body: initialBird,
    color,
    pos,
    renderer: <Bird />,
  };
};
