import { StoryContainer } from '../../../.storybook/story-container';
import { Icon } from '../../components/icon';
import manifest from '../../components/icon/manifest.json';

export default {
  title: 'Icon',
};

export const Icons = () => {
  return (
    <StoryContainer>
      {Object.keys(manifest).map(key => (
        <Icon key={key} icon={key} />
      ))}
    </StoryContainer>
  );
};
