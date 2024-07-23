import { StoryContainer } from '../../../.storybook/story-container';
import { Loader } from '../../components/loader';

export default {
  title: 'Loader',
};

export const Default = () => (
  <StoryContainer>
    <Loader width={48} />
  </StoryContainer>
);
