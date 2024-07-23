import { StoryContainer } from '../../../.storybook/story-container';
import { DecoderText } from '../../components/decoder-text';
import { Heading } from '../../components/heading';

export default {
  title: 'DecoderText',
  args: {
    text: 'Slick cyberpunk text',
  },
};

export const Text = ({ text }) => (
  <StoryContainer>
    <Heading level={3}>
      <DecoderText delay={0} text={text} />
    </Heading>
  </StoryContainer>
);
