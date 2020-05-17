# stacked-avatars
### This component lets you stack images by passing it an array of objects. In it's default style, the component is rendered as

![Default Style](./readme_images/component_default.png)

The basic usage of the component is
```
import StackedAvatars from 'stacked-avatars';
const yourList = [
  {
    title: 'Person 1',
    avatarURL: 'https://randomuser.me/api/portraits/men/52.jpg'
  },
  {
    title: 'Person 2',
    avatarURL: 'https://randomuser.me/api/portraits/men/51.jpg'
  },
  {
    title: 'Person 3',
    avatarURL: 'https://randomuser.me/api/portraits/women/1.jpg'
  }
]
<StackedAvatars
  data={yourList}
  imageKey="avatarURL"
/>
```

Note that in the above example, the key is avatarURL because the array of objects contains the image under the key avatarURL.

###Component Configuration

The following props can be configured for this component

| Prop | Description | Default |
| --- | --- |
| maxAvatarCount | Determines how many stacked avatars should be displayed | 3 |
| styles | Let's you pass in your own style object |

