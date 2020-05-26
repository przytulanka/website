import styled from 'styled-components';

export const VideoWrapper = styled.div`
	max-width: 1000px;
	min-height: 197px;
	margin: 0 auto;
	outline: none;

	${({ theme }) => theme.mq.mobileMid} {
		min-height: 323px;
	}
	${({ theme }) => theme.mq.tablet} {
		min-height: 363px;
	}
	${({ theme }) => theme.mq.tabletMid} {
		min-height: 479px;
	}
	${({ theme }) => theme.mq.tabletBig} {
		min-height: 560px;
	}
`;

export default VideoWrapper;
