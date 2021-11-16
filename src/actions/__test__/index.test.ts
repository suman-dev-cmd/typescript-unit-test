import moxios from 'moxios';
import { getSerectWord } from '../index';

describe('getSerectWord',()=>{
    beforeEach(()=>{
        moxios.install();
    });
    afterEach(()=>{
        moxios.uninstall();
    });
    test('secretWord is returned',()=>{
        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:'party'
            });
        });
        return getSerectWord()
            .then((secretWord:string)=>{
                expect(secretWord).toBe('party');
            })
    });
})