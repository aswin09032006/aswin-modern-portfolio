import { StoryContainer } from '../../../.storybook/story-container';
import { Monogram } from '../../components/monogram';

export default {
  title: 'Monogram',
};

export const Default = () => (
  <StoryContainer>
    <Monogram highlight />
  </StoryContainer>
);
