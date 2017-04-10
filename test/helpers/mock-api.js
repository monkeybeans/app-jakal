import nock from 'nock';
import { endpointMapping } from '../../src/actions/api';
import fixtures from '../helpers/fixtures';

export default function mockApi() {
  return nock('https://dev.null')
    .get(`/${endpointMapping.META_CONFIG}`)
    .reply(200, fixtures.config_display)
    .get(`/${endpointMapping.META_DYNAMICS}`)
    .reply(200, fixtures.dynamics)
    .get(`/${endpointMapping.META_VOTE}`)
    .reply(200, {});
}
