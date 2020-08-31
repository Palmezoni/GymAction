namespace GymAction.ClientePlanoAula {
    export namespace ClientePlanoAulaService {
        export const baseUrl = 'ClientePlanoAula/ClientePlanoAula';

        export declare function Create(request: Serenity.SaveRequest<ClientePlanoAulaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ClientePlanoAulaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientePlanoAulaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientePlanoAulaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ClientePlanoAula/ClientePlanoAula/Create",
            Update = "ClientePlanoAula/ClientePlanoAula/Update",
            Delete = "ClientePlanoAula/ClientePlanoAula/Delete",
            Retrieve = "ClientePlanoAula/ClientePlanoAula/Retrieve",
            List = "ClientePlanoAula/ClientePlanoAula/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ClientePlanoAulaService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
