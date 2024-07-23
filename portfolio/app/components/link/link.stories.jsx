import { StoryContainer } from '../../../.storybook/story-container';
import { Link } from '../../components/link';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://hamishw.com">Primary link</Link>
    <Link secondary href="https://hamishw.com">
      Secondary link
    </Link>
  </StoryContainer>
);
