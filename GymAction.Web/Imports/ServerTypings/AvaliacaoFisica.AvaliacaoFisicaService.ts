namespace GymAction.AvaliacaoFisica {
    export namespace AvaliacaoFisicaService {
        export const baseUrl = 'AvaliacaoFisica/AvaliacaoFisica';

        export declare function Create(request: Serenity.SaveRequest<AvaliacaoFisicaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AvaliacaoFisicaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AvaliacaoFisicaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AvaliacaoFisicaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AvaliacaoFisica/AvaliacaoFisica/Create",
            Update = "AvaliacaoFisica/AvaliacaoFisica/Update",
            Delete = "AvaliacaoFisica/AvaliacaoFisica/Delete",
            Retrieve = "AvaliacaoFisica/AvaliacaoFisica/Retrieve",
            List = "AvaliacaoFisica/AvaliacaoFisica/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AvaliacaoFisicaService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
