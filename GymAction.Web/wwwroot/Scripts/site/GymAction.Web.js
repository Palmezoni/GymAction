var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var SergenService;
        (function (SergenService) {
            SergenService.baseUrl = 'Administration/Sergen';
            [
                'ListConnections',
                'ListTables',
                'Generate'
            ].forEach(function (x) {
                SergenService[x] = function (r, s, o) {
                    return Q.serviceRequest(SergenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SergenService = Administration.SergenService || (Administration.SergenService = {}));
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Aula;
    (function (Aula) {
        var AulaForm = /** @class */ (function (_super) {
            __extends(AulaForm, _super);
            function AulaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AulaForm.init) {
                    AulaForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(AulaForm, [
                        'DesAula', w0,
                        'IdfTipoAtividade', w1,
                        'IdfAtivo', w2
                    ]);
                }
                return _this;
            }
            AulaForm.formKey = 'Aula.Aula';
            return AulaForm;
        }(Serenity.PrefixedContext));
        Aula.AulaForm = AulaForm;
    })(Aula = GymAction.Aula || (GymAction.Aula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Aula;
    (function (Aula) {
        var AulaRow;
        (function (AulaRow) {
            AulaRow.idProperty = 'CodAula';
            AulaRow.nameProperty = 'DesAula';
            AulaRow.localTextPrefix = 'Aula.Aula';
            AulaRow.lookupKey = 'Aula.Aula';
            function getLookup() {
                return Q.getLookup('Aula.Aula');
            }
            AulaRow.getLookup = getLookup;
            AulaRow.deletePermission = 'Aula:General';
            AulaRow.insertPermission = 'Aula:General';
            AulaRow.readPermission = 'Aula:General';
            AulaRow.updatePermission = 'Aula:General';
        })(AulaRow = Aula.AulaRow || (Aula.AulaRow = {}));
    })(Aula = GymAction.Aula || (GymAction.Aula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Aula;
    (function (Aula) {
        var AulaService;
        (function (AulaService) {
            AulaService.baseUrl = 'Aula/Aula';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AulaService[x] = function (r, s, o) {
                    return Q.serviceRequest(AulaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AulaService = Aula.AulaService || (Aula.AulaService = {}));
    })(Aula = GymAction.Aula || (GymAction.Aula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Aula;
    (function (Aula) {
        var AulaTipo;
        (function (AulaTipo) {
            AulaTipo[AulaTipo["Grupo"] = 0] = "Grupo";
            AulaTipo[AulaTipo["Individual"] = 1] = "Individual";
        })(AulaTipo = Aula.AulaTipo || (Aula.AulaTipo = {}));
        Serenity.Decorators.registerEnumType(AulaTipo, 'GymAction.Aula.AulaTipo', 'Aula.AulaTipo');
    })(Aula = GymAction.Aula || (GymAction.Aula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var AulaInstrutor;
    (function (AulaInstrutor) {
        var AulaInstrutorForm = /** @class */ (function (_super) {
            __extends(AulaInstrutorForm, _super);
            function AulaInstrutorForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AulaInstrutorForm.init) {
                    AulaInstrutorForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(AulaInstrutorForm, [
                        'CodAula', w0,
                        'CodInstrutor', w0,
                        'HorInicio', w1,
                        'HorFim', w1,
                        'IdfSegunda', w2,
                        'IdfTerca', w2,
                        'IdfQuarta', w2,
                        'IdfQuinta', w2,
                        'IdfSexta', w2,
                        'IdfSabado', w2,
                        'IdfDomingo', w2,
                        'DesSala', w1
                    ]);
                }
                return _this;
            }
            AulaInstrutorForm.formKey = 'AulaInstrutor.AulaInstrutor';
            return AulaInstrutorForm;
        }(Serenity.PrefixedContext));
        AulaInstrutor.AulaInstrutorForm = AulaInstrutorForm;
    })(AulaInstrutor = GymAction.AulaInstrutor || (GymAction.AulaInstrutor = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var AulaInstrutor;
    (function (AulaInstrutor) {
        var AulaInstrutorRow;
        (function (AulaInstrutorRow) {
            AulaInstrutorRow.idProperty = 'CodRegistro';
            AulaInstrutorRow.localTextPrefix = 'AulaInstrutor.AulaInstrutor';
            AulaInstrutorRow.deletePermission = 'AulaInstrutor:General';
            AulaInstrutorRow.insertPermission = 'AulaInstrutor:General';
            AulaInstrutorRow.readPermission = 'AulaInstrutor:General';
            AulaInstrutorRow.updatePermission = 'AulaInstrutor:General';
        })(AulaInstrutorRow = AulaInstrutor.AulaInstrutorRow || (AulaInstrutor.AulaInstrutorRow = {}));
    })(AulaInstrutor = GymAction.AulaInstrutor || (GymAction.AulaInstrutor = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var AulaInstrutor;
    (function (AulaInstrutor) {
        var AulaInstrutorService;
        (function (AulaInstrutorService) {
            AulaInstrutorService.baseUrl = 'AulaInstrutor/AulaInstrutor';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AulaInstrutorService[x] = function (r, s, o) {
                    return Q.serviceRequest(AulaInstrutorService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AulaInstrutorService = AulaInstrutor.AulaInstrutorService || (AulaInstrutor.AulaInstrutorService = {}));
    })(AulaInstrutor = GymAction.AulaInstrutor || (GymAction.AulaInstrutor = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var AvaliacaoFisica;
    (function (AvaliacaoFisica) {
        var AvaliacaoFisicaForm = /** @class */ (function (_super) {
            __extends(AvaliacaoFisicaForm, _super);
            function AvaliacaoFisicaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AvaliacaoFisicaForm.init) {
                    AvaliacaoFisicaForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(AvaliacaoFisicaForm, [
                        'CodCliente', w0,
                        'CodFisioterapeuta', w0,
                        'DesAnamnese', w1,
                        'DesExameDobras', w1,
                        'DesExameErgometrico', w1,
                        'DatAvaliacao', w2
                    ]);
                }
                return _this;
            }
            AvaliacaoFisicaForm.formKey = 'AvaliacaoFisica.AvaliacaoFisica';
            return AvaliacaoFisicaForm;
        }(Serenity.PrefixedContext));
        AvaliacaoFisica.AvaliacaoFisicaForm = AvaliacaoFisicaForm;
    })(AvaliacaoFisica = GymAction.AvaliacaoFisica || (GymAction.AvaliacaoFisica = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var AvaliacaoFisica;
    (function (AvaliacaoFisica) {
        var AvaliacaoFisicaRow;
        (function (AvaliacaoFisicaRow) {
            AvaliacaoFisicaRow.idProperty = 'CodAvaliacaoFisica';
            AvaliacaoFisicaRow.nameProperty = 'DesAnamnese';
            AvaliacaoFisicaRow.localTextPrefix = 'AvaliacaoFisica.AvaliacaoFisica';
            AvaliacaoFisicaRow.deletePermission = 'AvaliacaoFisica:General';
            AvaliacaoFisicaRow.insertPermission = 'AvaliacaoFisica:General';
            AvaliacaoFisicaRow.readPermission = 'AvaliacaoFisica:General';
            AvaliacaoFisicaRow.updatePermission = 'AvaliacaoFisica:General';
        })(AvaliacaoFisicaRow = AvaliacaoFisica.AvaliacaoFisicaRow || (AvaliacaoFisica.AvaliacaoFisicaRow = {}));
    })(AvaliacaoFisica = GymAction.AvaliacaoFisica || (GymAction.AvaliacaoFisica = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var AvaliacaoFisica;
    (function (AvaliacaoFisica) {
        var AvaliacaoFisicaService;
        (function (AvaliacaoFisicaService) {
            AvaliacaoFisicaService.baseUrl = 'AvaliacaoFisica/AvaliacaoFisica';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AvaliacaoFisicaService[x] = function (r, s, o) {
                    return Q.serviceRequest(AvaliacaoFisicaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AvaliacaoFisicaService = AvaliacaoFisica.AvaliacaoFisicaService || (AvaliacaoFisica.AvaliacaoFisicaService = {}));
    })(AvaliacaoFisica = GymAction.AvaliacaoFisica || (GymAction.AvaliacaoFisica = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Cliente;
    (function (Cliente) {
        var ClienteForm = /** @class */ (function (_super) {
            __extends(ClienteForm, _super);
            function ClienteForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ClienteForm.init) {
                    ClienteForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(ClienteForm, [
                        'CodBiometria', w0,
                        'DesNome', w1,
                        'DesRg', w1,
                        'DesCpf', w1,
                        'IdfAdimplente', w2,
                        'IdfAtivo', w2,
                        'DesEndereco', w1
                    ]);
                }
                return _this;
            }
            ClienteForm.formKey = 'Cliente.Cliente';
            return ClienteForm;
        }(Serenity.PrefixedContext));
        Cliente.ClienteForm = ClienteForm;
    })(Cliente = GymAction.Cliente || (GymAction.Cliente = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Cliente;
    (function (Cliente) {
        var ClienteRow;
        (function (ClienteRow) {
            ClienteRow.idProperty = 'CodCliente';
            ClienteRow.nameProperty = 'DesNome';
            ClienteRow.localTextPrefix = 'Cliente.Cliente';
            ClienteRow.lookupKey = 'Cliente.Cliente';
            function getLookup() {
                return Q.getLookup('Cliente.Cliente');
            }
            ClienteRow.getLookup = getLookup;
            ClienteRow.deletePermission = 'Cliente:General';
            ClienteRow.insertPermission = 'Cliente:General';
            ClienteRow.readPermission = 'Cliente:General';
            ClienteRow.updatePermission = 'Cliente:General';
        })(ClienteRow = Cliente.ClienteRow || (Cliente.ClienteRow = {}));
    })(Cliente = GymAction.Cliente || (GymAction.Cliente = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Cliente;
    (function (Cliente) {
        var ClienteService;
        (function (ClienteService) {
            ClienteService.baseUrl = 'Cliente/Cliente';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ClienteService[x] = function (r, s, o) {
                    return Q.serviceRequest(ClienteService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ClienteService = Cliente.ClienteService || (Cliente.ClienteService = {}));
    })(Cliente = GymAction.Cliente || (GymAction.Cliente = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var ClientePlanoAula;
    (function (ClientePlanoAula) {
        var ClientePlanoAulaForm = /** @class */ (function (_super) {
            __extends(ClientePlanoAulaForm, _super);
            function ClientePlanoAulaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ClientePlanoAulaForm.init) {
                    ClientePlanoAulaForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    Q.initFormType(ClientePlanoAulaForm, [
                        'Plano', w0,
                        'Aula', w0,
                        'Cliente', w0
                    ]);
                }
                return _this;
            }
            ClientePlanoAulaForm.formKey = 'ClientePlanoAula.ClientePlanoAula';
            return ClientePlanoAulaForm;
        }(Serenity.PrefixedContext));
        ClientePlanoAula.ClientePlanoAulaForm = ClientePlanoAulaForm;
    })(ClientePlanoAula = GymAction.ClientePlanoAula || (GymAction.ClientePlanoAula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var ClientePlanoAula;
    (function (ClientePlanoAula) {
        var ClientePlanoAulaRow;
        (function (ClientePlanoAulaRow) {
            ClientePlanoAulaRow.idProperty = 'CodRegistro';
            ClientePlanoAulaRow.localTextPrefix = 'ClientePlanoAula.ClientePlanoAula';
            ClientePlanoAulaRow.deletePermission = 'ClientePlanoAula:General';
            ClientePlanoAulaRow.insertPermission = 'ClientePlanoAula:General';
            ClientePlanoAulaRow.readPermission = 'ClientePlanoAula:General';
            ClientePlanoAulaRow.updatePermission = 'ClientePlanoAula:General';
        })(ClientePlanoAulaRow = ClientePlanoAula.ClientePlanoAulaRow || (ClientePlanoAula.ClientePlanoAulaRow = {}));
    })(ClientePlanoAula = GymAction.ClientePlanoAula || (GymAction.ClientePlanoAula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var ClientePlanoAula;
    (function (ClientePlanoAula) {
        var ClientePlanoAulaService;
        (function (ClientePlanoAulaService) {
            ClientePlanoAulaService.baseUrl = 'ClientePlanoAula/ClientePlanoAula';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ClientePlanoAulaService[x] = function (r, s, o) {
                    return Q.serviceRequest(ClientePlanoAulaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ClientePlanoAulaService = ClientePlanoAula.ClientePlanoAulaService || (ClientePlanoAula.ClientePlanoAulaService = {}));
    })(ClientePlanoAula = GymAction.ClientePlanoAula || (GymAction.ClientePlanoAula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = GymAction.Common || (GymAction.Common = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = GymAction.Common || (GymAction.Common = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Ferias;
    (function (Ferias) {
        var FeriasForm = /** @class */ (function (_super) {
            __extends(FeriasForm, _super);
            function FeriasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FeriasForm.init) {
                    FeriasForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(FeriasForm, [
                        'CodPlano', w0,
                        'CodAula', w0,
                        'CodCliente', w0,
                        'DatInicio', w1,
                        'DatFim', w1
                    ]);
                }
                return _this;
            }
            FeriasForm.formKey = 'Ferias.Ferias';
            return FeriasForm;
        }(Serenity.PrefixedContext));
        Ferias.FeriasForm = FeriasForm;
    })(Ferias = GymAction.Ferias || (GymAction.Ferias = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Ferias;
    (function (Ferias) {
        var FeriasRow;
        (function (FeriasRow) {
            FeriasRow.idProperty = 'CodFerias';
            FeriasRow.localTextPrefix = 'Ferias.Ferias';
            FeriasRow.deletePermission = 'Ferias:General';
            FeriasRow.insertPermission = 'Ferias:General';
            FeriasRow.readPermission = 'Ferias:General';
            FeriasRow.updatePermission = 'Ferias:General';
        })(FeriasRow = Ferias.FeriasRow || (Ferias.FeriasRow = {}));
    })(Ferias = GymAction.Ferias || (GymAction.Ferias = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Ferias;
    (function (Ferias) {
        var FeriasService;
        (function (FeriasService) {
            FeriasService.baseUrl = 'Ferias/Ferias';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FeriasService[x] = function (r, s, o) {
                    return Q.serviceRequest(FeriasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FeriasService = Ferias.FeriasService || (Ferias.FeriasService = {}));
    })(Ferias = GymAction.Ferias || (GymAction.Ferias = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Fisioterapeuta;
    (function (Fisioterapeuta) {
        var FisioterapeutaForm = /** @class */ (function (_super) {
            __extends(FisioterapeutaForm, _super);
            function FisioterapeutaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FisioterapeutaForm.init) {
                    FisioterapeutaForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    Q.initFormType(FisioterapeutaForm, [
                        'DesNome', w0,
                        'IdfAtivo', w1
                    ]);
                }
                return _this;
            }
            FisioterapeutaForm.formKey = 'Fisioterapeuta.Fisioterapeuta';
            return FisioterapeutaForm;
        }(Serenity.PrefixedContext));
        Fisioterapeuta.FisioterapeutaForm = FisioterapeutaForm;
    })(Fisioterapeuta = GymAction.Fisioterapeuta || (GymAction.Fisioterapeuta = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Fisioterapeuta;
    (function (Fisioterapeuta) {
        var FisioterapeutaRow;
        (function (FisioterapeutaRow) {
            FisioterapeutaRow.idProperty = 'CodFisioterapeuta';
            FisioterapeutaRow.nameProperty = 'DesNome';
            FisioterapeutaRow.localTextPrefix = 'Fisioterapeuta.Fisioterapeuta';
            FisioterapeutaRow.lookupKey = 'Fisioterapeuta.Fisioterapeuta';
            function getLookup() {
                return Q.getLookup('Fisioterapeuta.Fisioterapeuta');
            }
            FisioterapeutaRow.getLookup = getLookup;
            FisioterapeutaRow.deletePermission = 'Fisioterapeuta:General';
            FisioterapeutaRow.insertPermission = 'Fisioterapeuta:General';
            FisioterapeutaRow.readPermission = 'Fisioterapeuta:General';
            FisioterapeutaRow.updatePermission = 'Fisioterapeuta:General';
        })(FisioterapeutaRow = Fisioterapeuta.FisioterapeutaRow || (Fisioterapeuta.FisioterapeutaRow = {}));
    })(Fisioterapeuta = GymAction.Fisioterapeuta || (GymAction.Fisioterapeuta = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Fisioterapeuta;
    (function (Fisioterapeuta) {
        var FisioterapeutaService;
        (function (FisioterapeutaService) {
            FisioterapeutaService.baseUrl = 'Fisioterapeuta/Fisioterapeuta';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FisioterapeutaService[x] = function (r, s, o) {
                    return Q.serviceRequest(FisioterapeutaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FisioterapeutaService = Fisioterapeuta.FisioterapeutaService || (Fisioterapeuta.FisioterapeutaService = {}));
    })(Fisioterapeuta = GymAction.Fisioterapeuta || (GymAction.Fisioterapeuta = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Instrutor;
    (function (Instrutor) {
        var InstrutorForm = /** @class */ (function (_super) {
            __extends(InstrutorForm, _super);
            function InstrutorForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InstrutorForm.init) {
                    InstrutorForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(InstrutorForm, [
                        'DesNome', w0,
                        'DesRg', w0,
                        'DesCpf', w0,
                        'IdfTipoAtividade', w1,
                        'IdfAtivo', w2
                    ]);
                }
                return _this;
            }
            InstrutorForm.formKey = 'Instrutor.Instrutor';
            return InstrutorForm;
        }(Serenity.PrefixedContext));
        Instrutor.InstrutorForm = InstrutorForm;
    })(Instrutor = GymAction.Instrutor || (GymAction.Instrutor = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Instrutor;
    (function (Instrutor) {
        var InstrutorRow;
        (function (InstrutorRow) {
            InstrutorRow.idProperty = 'CodInstrutor';
            InstrutorRow.nameProperty = 'DesNome';
            InstrutorRow.localTextPrefix = 'Instrutor.Instrutor';
            InstrutorRow.lookupKey = 'Instrutor.Instrutor';
            function getLookup() {
                return Q.getLookup('Instrutor.Instrutor');
            }
            InstrutorRow.getLookup = getLookup;
            InstrutorRow.deletePermission = 'Instrutor:General';
            InstrutorRow.insertPermission = 'Instrutor:General';
            InstrutorRow.readPermission = 'Instrutor:General';
            InstrutorRow.updatePermission = 'Instrutor:General';
        })(InstrutorRow = Instrutor.InstrutorRow || (Instrutor.InstrutorRow = {}));
    })(Instrutor = GymAction.Instrutor || (GymAction.Instrutor = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Instrutor;
    (function (Instrutor) {
        var InstrutorService;
        (function (InstrutorService) {
            InstrutorService.baseUrl = 'Instrutor/Instrutor';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InstrutorService[x] = function (r, s, o) {
                    return Q.serviceRequest(InstrutorService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InstrutorService = Instrutor.InstrutorService || (Instrutor.InstrutorService = {}));
    })(Instrutor = GymAction.Instrutor || (GymAction.Instrutor = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Instrutor;
    (function (Instrutor) {
        var InstrutorTipo;
        (function (InstrutorTipo) {
            InstrutorTipo[InstrutorTipo["Individual"] = 0] = "Individual";
            InstrutorTipo[InstrutorTipo["Grupo"] = 1] = "Grupo";
            InstrutorTipo[InstrutorTipo["Todas"] = 2] = "Todas";
        })(InstrutorTipo = Instrutor.InstrutorTipo || (Instrutor.InstrutorTipo = {}));
        Serenity.Decorators.registerEnumType(InstrutorTipo, 'GymAction.Instrutor.InstrutorTipo', 'Instrutor.InstrutorTipo');
    })(Instrutor = GymAction.Instrutor || (GymAction.Instrutor = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = GymAction.Membership || (GymAction.Membership = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = GymAction.Membership || (GymAction.Membership = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = GymAction.Membership || (GymAction.Membership = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = GymAction.Membership || (GymAction.Membership = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = GymAction.Membership || (GymAction.Membership = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Pagamento;
    (function (Pagamento) {
        var PagamentoForm = /** @class */ (function (_super) {
            __extends(PagamentoForm, _super);
            function PagamentoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PagamentoForm.init) {
                    PagamentoForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(PagamentoForm, [
                        'CodPlano', w0,
                        'CodAula', w0,
                        'CodCliente', w0,
                        'DatVencimento', w1,
                        'DatPagamento', w1,
                        'VlrPago', w2
                    ]);
                }
                return _this;
            }
            PagamentoForm.formKey = 'Pagamento.Pagamento';
            return PagamentoForm;
        }(Serenity.PrefixedContext));
        Pagamento.PagamentoForm = PagamentoForm;
    })(Pagamento = GymAction.Pagamento || (GymAction.Pagamento = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Pagamento;
    (function (Pagamento) {
        var PagamentoRow;
        (function (PagamentoRow) {
            PagamentoRow.idProperty = 'CodPagamento';
            PagamentoRow.localTextPrefix = 'Pagamento.Pagamento';
            PagamentoRow.deletePermission = 'Pagamento:General';
            PagamentoRow.insertPermission = 'Pagamento:General';
            PagamentoRow.readPermission = 'Pagamento:General';
            PagamentoRow.updatePermission = 'Pagamento:General';
        })(PagamentoRow = Pagamento.PagamentoRow || (Pagamento.PagamentoRow = {}));
    })(Pagamento = GymAction.Pagamento || (GymAction.Pagamento = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Pagamento;
    (function (Pagamento) {
        var PagamentoService;
        (function (PagamentoService) {
            PagamentoService.baseUrl = 'Pagamento/Pagamento';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PagamentoService[x] = function (r, s, o) {
                    return Q.serviceRequest(PagamentoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PagamentoService = Pagamento.PagamentoService || (Pagamento.PagamentoService = {}));
    })(Pagamento = GymAction.Pagamento || (GymAction.Pagamento = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Plano;
    (function (Plano) {
        var PlanoForm = /** @class */ (function (_super) {
            __extends(PlanoForm, _super);
            function PlanoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PlanoForm.init) {
                    PlanoForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(PlanoForm, [
                        'DesNome', w0,
                        'IdfTipo', w1,
                        'IdfAivo', w2
                    ]);
                }
                return _this;
            }
            PlanoForm.formKey = 'Plano.Plano';
            return PlanoForm;
        }(Serenity.PrefixedContext));
        Plano.PlanoForm = PlanoForm;
    })(Plano = GymAction.Plano || (GymAction.Plano = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Plano;
    (function (Plano) {
        var PlanoRow;
        (function (PlanoRow) {
            PlanoRow.idProperty = 'CodPlano';
            PlanoRow.nameProperty = 'DesNome';
            PlanoRow.localTextPrefix = 'Plano.Plano';
            PlanoRow.lookupKey = 'Plano.Plano';
            function getLookup() {
                return Q.getLookup('Plano.Plano');
            }
            PlanoRow.getLookup = getLookup;
            PlanoRow.deletePermission = 'Plano:General';
            PlanoRow.insertPermission = 'Plano:General';
            PlanoRow.readPermission = 'Plano:General';
            PlanoRow.updatePermission = 'Plano:General';
        })(PlanoRow = Plano.PlanoRow || (Plano.PlanoRow = {}));
    })(Plano = GymAction.Plano || (GymAction.Plano = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Plano;
    (function (Plano) {
        var PlanoService;
        (function (PlanoService) {
            PlanoService.baseUrl = 'Plano/Plano';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PlanoService[x] = function (r, s, o) {
                    return Q.serviceRequest(PlanoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PlanoService = Plano.PlanoService || (Plano.PlanoService = {}));
    })(Plano = GymAction.Plano || (GymAction.Plano = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Plano;
    (function (Plano) {
        var PlanoTipo;
        (function (PlanoTipo) {
            PlanoTipo[PlanoTipo["Mensal"] = 0] = "Mensal";
            PlanoTipo[PlanoTipo["Anual"] = 1] = "Anual";
        })(PlanoTipo = Plano.PlanoTipo || (Plano.PlanoTipo = {}));
        Serenity.Decorators.registerEnumType(PlanoTipo, 'GymAction.Plano.PlanoTipo', 'Plano.PlanoTipo');
    })(Plano = GymAction.Plano || (GymAction.Plano = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var PlanoAula;
    (function (PlanoAula) {
        var PlanoAulaForm = /** @class */ (function (_super) {
            __extends(PlanoAulaForm, _super);
            function PlanoAulaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PlanoAulaForm.init) {
                    PlanoAulaForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(PlanoAulaForm, [
                        'CodPlano', w0,
                        'CodAula', w0,
                        'VlrAula', w1
                    ]);
                }
                return _this;
            }
            PlanoAulaForm.formKey = 'PlanoAula.PlanoAula';
            return PlanoAulaForm;
        }(Serenity.PrefixedContext));
        PlanoAula.PlanoAulaForm = PlanoAulaForm;
    })(PlanoAula = GymAction.PlanoAula || (GymAction.PlanoAula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var PlanoAula;
    (function (PlanoAula) {
        var PlanoAulaRow;
        (function (PlanoAulaRow) {
            PlanoAulaRow.idProperty = 'CodRegistro';
            PlanoAulaRow.nameProperty = 'CodPlanoDesNome';
            PlanoAulaRow.localTextPrefix = 'PlanoAula.PlanoAula';
            PlanoAulaRow.deletePermission = 'PlanoAula:General';
            PlanoAulaRow.insertPermission = 'PlanoAula:General';
            PlanoAulaRow.readPermission = 'PlanoAula:General';
            PlanoAulaRow.updatePermission = 'PlanoAula:General';
        })(PlanoAulaRow = PlanoAula.PlanoAulaRow || (PlanoAula.PlanoAulaRow = {}));
    })(PlanoAula = GymAction.PlanoAula || (GymAction.PlanoAula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var PlanoAula;
    (function (PlanoAula) {
        var PlanoAulaService;
        (function (PlanoAulaService) {
            PlanoAulaService.baseUrl = 'PlanoAula/PlanoAula';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PlanoAulaService[x] = function (r, s, o) {
                    return Q.serviceRequest(PlanoAulaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PlanoAulaService = PlanoAula.PlanoAulaService || (PlanoAula.PlanoAulaService = {}));
    })(PlanoAula = GymAction.PlanoAula || (GymAction.PlanoAula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var RegistroAula;
    (function (RegistroAula) {
        var RegistroAulaForm = /** @class */ (function (_super) {
            __extends(RegistroAulaForm, _super);
            function RegistroAulaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RegistroAulaForm.init) {
                    RegistroAulaForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(RegistroAulaForm, [
                        'CodPlano', w0,
                        'CodAula', w0,
                        'CodCliente', w0,
                        'DatAula', w1
                    ]);
                }
                return _this;
            }
            RegistroAulaForm.formKey = 'RegistroAula.RegistroAula';
            return RegistroAulaForm;
        }(Serenity.PrefixedContext));
        RegistroAula.RegistroAulaForm = RegistroAulaForm;
    })(RegistroAula = GymAction.RegistroAula || (GymAction.RegistroAula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var RegistroAula;
    (function (RegistroAula) {
        var RegistroAulaRow;
        (function (RegistroAulaRow) {
            RegistroAulaRow.idProperty = 'CodRegistro';
            RegistroAulaRow.localTextPrefix = 'RegistroAula.RegistroAula';
            RegistroAulaRow.deletePermission = 'RegistroAula:General';
            RegistroAulaRow.insertPermission = 'RegistroAula:General';
            RegistroAulaRow.readPermission = 'RegistroAula:General';
            RegistroAulaRow.updatePermission = 'RegistroAula:General';
        })(RegistroAulaRow = RegistroAula.RegistroAulaRow || (RegistroAula.RegistroAulaRow = {}));
    })(RegistroAula = GymAction.RegistroAula || (GymAction.RegistroAula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var RegistroAula;
    (function (RegistroAula) {
        var RegistroAulaService;
        (function (RegistroAulaService) {
            RegistroAulaService.baseUrl = 'RegistroAula/RegistroAula';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RegistroAulaService[x] = function (r, s, o) {
                    return Q.serviceRequest(RegistroAulaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RegistroAulaService = RegistroAula.RegistroAulaService || (RegistroAula.RegistroAulaService = {}));
    })(RegistroAula = GymAction.RegistroAula || (GymAction.RegistroAula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Texts;
    (function (Texts) {
        GymAction['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Aula: { Aula: { CodAula: 1, DesAula: 1, IdfAtivo: 1, IdfTipoAtividade: 1 } }, AulaInstrutor: { AulaInstrutor: { CodAula: 1, CodAulaDesAula: 1, CodAulaIdfAtivo: 1, CodAulaIdfTipoAtividade: 1, CodInstrutor: 1, CodInstrutorDesCpf: 1, CodInstrutorDesNome: 1, CodInstrutorDesRg: 1, CodInstrutorIdfAtivo: 1, CodInstrutorIdfTipoAtividade: 1, CodRegistro: 1, DesSala: 1, HorFim: 1, HorInicio: 1, IdfDomingo: 1, IdfQuarta: 1, IdfQuinta: 1, IdfSabado: 1, IdfSegunda: 1, IdfSexta: 1, IdfTerca: 1 } }, AvaliacaoFisica: { AvaliacaoFisica: { CodAvaliacaoFisica: 1, CodCliente: 1, CodClienteCodBiometria: 1, CodClienteDesCpf: 1, CodClienteDesEndereco: 1, CodClienteDesNome: 1, CodClienteDesRg: 1, CodClienteIdfAdimplente: 1, CodClienteIdfAtivo: 1, CodFisioterapeuta: 1, CodFisioterapeutaDesNome: 1, CodFisioterapeutaIdfAtivo: 1, DatAvaliacao: 1, DesAnamnese: 1, DesExameDobras: 1, DesExameErgometrico: 1 } }, Cliente: { Cliente: { CodBiometria: 1, CodCliente: 1, DesCpf: 1, DesEndereco: 1, DesNome: 1, DesRg: 1, IdfAdimplente: 1, IdfAtivo: 1 } }, ClientePlanoAula: { ClientePlanoAula: { Aula: 1, AulaDesAula: 1, AulaIdfAtivo: 1, AulaIdfTipoAtividade: 1, Cliente: 1, ClienteCodBiometria: 1, ClienteDesCpf: 1, ClienteDesEndereco: 1, ClienteDesNome: 1, ClienteDesRg: 1, ClienteIdfAdimplente: 1, ClienteIdfAtivo: 1, CodRegistro: 1, Plano: 1, PlanoDesNome: 1, PlanoIdfAivo: 1, PlanoIdfTipo: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Ferias: { Ferias: { CodAula: 1, CodAulaDesAula: 1, CodAulaIdfAtivo: 1, CodAulaIdfTipoAtividade: 1, CodCliente: 1, CodClienteCodBiometria: 1, CodClienteDesCpf: 1, CodClienteDesEndereco: 1, CodClienteDesNome: 1, CodClienteDesRg: 1, CodClienteIdfAdimplente: 1, CodClienteIdfAtivo: 1, CodFerias: 1, CodPlano: 1, CodPlanoDesNome: 1, CodPlanoIdfAivo: 1, CodPlanoIdfTipo: 1, DatFim: 1, DatInicio: 1 } }, Fisioterapeuta: { Fisioterapeuta: { CodFisioterapeuta: 1, DesNome: 1, IdfAtivo: 1 } }, Instrutor: { Instrutor: { CodInstrutor: 1, DesCpf: 1, DesNome: 1, DesRg: 1, IdfAtivo: 1, IdfTipoAtividade: 1 } }, Pagamento: { Pagamento: { CodAula: 1, CodAulaDesAula: 1, CodAulaIdfAtivo: 1, CodAulaIdfTipoAtividade: 1, CodCliente: 1, CodClienteCodBiometria: 1, CodClienteDesCpf: 1, CodClienteDesEndereco: 1, CodClienteDesNome: 1, CodClienteDesRg: 1, CodClienteIdfAdimplente: 1, CodClienteIdfAtivo: 1, CodPagamento: 1, CodPlano: 1, CodPlanoDesNome: 1, CodPlanoIdfAivo: 1, CodPlanoIdfTipo: 1, DatPagamento: 1, DatVencimento: 1, VlrPago: 1 } }, Plano: { Plano: { CodPlano: 1, DesNome: 1, IdfAivo: 1, IdfTipo: 1 } }, PlanoAula: { PlanoAula: { CodAula: 1, CodAulaDesAula: 1, CodAulaIdfAtivo: 1, CodAulaIdfTipoAtividade: 1, CodPlano: 1, CodPlanoDesNome: 1, CodPlanoIdfAivo: 1, CodPlanoIdfTipo: 1, CodRegistro: 1, VlrAula: 1 } }, RegistroAula: { RegistroAula: { CodAula: 1, CodAulaDesAula: 1, CodAulaIdfAtivo: 1, CodAulaIdfTipoAtividade: 1, CodCliente: 1, CodClienteCodBiometria: 1, CodClienteDesCpf: 1, CodClienteDesEndereco: 1, CodClienteDesNome: 1, CodClienteDesRg: 1, CodClienteIdfAdimplente: 1, CodClienteIdfAtivo: 1, CodPlano: 1, CodPlanoDesNome: 1, CodPlanoIdfAivo: 1, CodPlanoIdfTipo: 1, CodRegistro: 1, DatAula: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = GymAction.Texts || (GymAction.Texts = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var SergenPanel = /** @class */ (function (_super) {
            __extends(SergenPanel, _super);
            function SergenPanel(container) {
                var _this = _super.call(this, container) || this;
                var vm = new Vue({
                    el: $('<div/>').appendTo(_this.element)[0],
                    data: {
                        connection: "",
                        connections: [],
                        tables: [],
                        generate: {
                            Row: true,
                            Service: true,
                            UI: true
                        }
                    },
                    methods: {
                        generateCode: function (table) {
                            if (!table.Identifier) {
                                Q.notifyError("Identifier cannot be empty!");
                                return;
                            }
                            if (!table.Module) {
                                Q.notifyError("Module cannot be empty!");
                                return;
                            }
                            Administration.SergenService.Generate({
                                ConnectionKey: this.connection,
                                Table: table,
                                GenerateOptions: this.generate
                            }, function (r) {
                                Q.notifySuccess("Code for selected table is generated. You'll need to rebuild your project.");
                            });
                        }
                    },
                    watch: {
                        connection: function (val) {
                            if (!val || !val.length)
                                vm.tables = [];
                            else
                                Administration.SergenService.ListTables({
                                    ConnectionKey: val
                                }, function (response) { return vm.tables = response.Entities; });
                        }
                    },
                    template: Q.getTemplate('Administration.SergenPanel')
                });
                Administration.SergenService.ListConnections({}, function (response) { return vm.connections = response.Entities; });
                return _this;
            }
            return SergenPanel;
        }(Serenity.Widget));
        Administration.SergenPanel = SergenPanel;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = GymAction.Authorization || (GymAction.Authorization = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: false,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = GymAction.Administration || (GymAction.Administration = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Aula;
    (function (Aula) {
        var AulaDialog = /** @class */ (function (_super) {
            __extends(AulaDialog, _super);
            function AulaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Aula.AulaForm(_this.idPrefix);
                return _this;
            }
            AulaDialog.prototype.getFormKey = function () { return Aula.AulaForm.formKey; };
            AulaDialog.prototype.getIdProperty = function () { return Aula.AulaRow.idProperty; };
            AulaDialog.prototype.getLocalTextPrefix = function () { return Aula.AulaRow.localTextPrefix; };
            AulaDialog.prototype.getNameProperty = function () { return Aula.AulaRow.nameProperty; };
            AulaDialog.prototype.getService = function () { return Aula.AulaService.baseUrl; };
            AulaDialog.prototype.getDeletePermission = function () { return Aula.AulaRow.deletePermission; };
            AulaDialog.prototype.getInsertPermission = function () { return Aula.AulaRow.insertPermission; };
            AulaDialog.prototype.getUpdatePermission = function () { return Aula.AulaRow.updatePermission; };
            AulaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AulaDialog);
            return AulaDialog;
        }(Serenity.EntityDialog));
        Aula.AulaDialog = AulaDialog;
    })(Aula = GymAction.Aula || (GymAction.Aula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Aula;
    (function (Aula) {
        var AulaGrid = /** @class */ (function (_super) {
            __extends(AulaGrid, _super);
            function AulaGrid(container) {
                return _super.call(this, container) || this;
            }
            AulaGrid.prototype.getColumnsKey = function () { return 'Aula.Aula'; };
            AulaGrid.prototype.getDialogType = function () { return Aula.AulaDialog; };
            AulaGrid.prototype.getIdProperty = function () { return Aula.AulaRow.idProperty; };
            AulaGrid.prototype.getInsertPermission = function () { return Aula.AulaRow.insertPermission; };
            AulaGrid.prototype.getLocalTextPrefix = function () { return Aula.AulaRow.localTextPrefix; };
            AulaGrid.prototype.getService = function () { return Aula.AulaService.baseUrl; };
            AulaGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Aula/Aula/ListExcel',
                    separator: true
                }));
                buttons.push(GymAction.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            AulaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AulaGrid);
            return AulaGrid;
        }(Serenity.EntityGrid));
        Aula.AulaGrid = AulaGrid;
    })(Aula = GymAction.Aula || (GymAction.Aula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var AulaInstrutor;
    (function (AulaInstrutor) {
        var AulaInstrutorDialog = /** @class */ (function (_super) {
            __extends(AulaInstrutorDialog, _super);
            function AulaInstrutorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AulaInstrutor.AulaInstrutorForm(_this.idPrefix);
                return _this;
            }
            AulaInstrutorDialog.prototype.getFormKey = function () { return AulaInstrutor.AulaInstrutorForm.formKey; };
            AulaInstrutorDialog.prototype.getIdProperty = function () { return AulaInstrutor.AulaInstrutorRow.idProperty; };
            AulaInstrutorDialog.prototype.getLocalTextPrefix = function () { return AulaInstrutor.AulaInstrutorRow.localTextPrefix; };
            AulaInstrutorDialog.prototype.getNameProperty = function () { return AulaInstrutor.AulaInstrutorRow.nameProperty; };
            AulaInstrutorDialog.prototype.getService = function () { return AulaInstrutor.AulaInstrutorService.baseUrl; };
            AulaInstrutorDialog.prototype.getDeletePermission = function () { return AulaInstrutor.AulaInstrutorRow.deletePermission; };
            AulaInstrutorDialog.prototype.getInsertPermission = function () { return AulaInstrutor.AulaInstrutorRow.insertPermission; };
            AulaInstrutorDialog.prototype.getUpdatePermission = function () { return AulaInstrutor.AulaInstrutorRow.updatePermission; };
            AulaInstrutorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AulaInstrutorDialog);
            return AulaInstrutorDialog;
        }(Serenity.EntityDialog));
        AulaInstrutor.AulaInstrutorDialog = AulaInstrutorDialog;
    })(AulaInstrutor = GymAction.AulaInstrutor || (GymAction.AulaInstrutor = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var AulaInstrutor;
    (function (AulaInstrutor) {
        var AulaInstrutorGrid = /** @class */ (function (_super) {
            __extends(AulaInstrutorGrid, _super);
            function AulaInstrutorGrid(container) {
                return _super.call(this, container) || this;
            }
            AulaInstrutorGrid.prototype.getColumnsKey = function () { return 'AulaInstrutor.AulaInstrutor'; };
            AulaInstrutorGrid.prototype.getDialogType = function () { return AulaInstrutor.AulaInstrutorDialog; };
            AulaInstrutorGrid.prototype.getIdProperty = function () { return AulaInstrutor.AulaInstrutorRow.idProperty; };
            AulaInstrutorGrid.prototype.getInsertPermission = function () { return AulaInstrutor.AulaInstrutorRow.insertPermission; };
            AulaInstrutorGrid.prototype.getLocalTextPrefix = function () { return AulaInstrutor.AulaInstrutorRow.localTextPrefix; };
            AulaInstrutorGrid.prototype.getService = function () { return AulaInstrutor.AulaInstrutorService.baseUrl; };
            AulaInstrutorGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'AulaInstrutor/AulaInstrutor/ListExcel',
                    separator: true
                }));
                buttons.push(GymAction.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            AulaInstrutorGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AulaInstrutorGrid);
            return AulaInstrutorGrid;
        }(Serenity.EntityGrid));
        AulaInstrutor.AulaInstrutorGrid = AulaInstrutorGrid;
    })(AulaInstrutor = GymAction.AulaInstrutor || (GymAction.AulaInstrutor = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var AvaliacaoFisica;
    (function (AvaliacaoFisica) {
        var AvaliacaoFisicaDialog = /** @class */ (function (_super) {
            __extends(AvaliacaoFisicaDialog, _super);
            function AvaliacaoFisicaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AvaliacaoFisica.AvaliacaoFisicaForm(_this.idPrefix);
                return _this;
            }
            AvaliacaoFisicaDialog.prototype.getFormKey = function () { return AvaliacaoFisica.AvaliacaoFisicaForm.formKey; };
            AvaliacaoFisicaDialog.prototype.getIdProperty = function () { return AvaliacaoFisica.AvaliacaoFisicaRow.idProperty; };
            AvaliacaoFisicaDialog.prototype.getLocalTextPrefix = function () { return AvaliacaoFisica.AvaliacaoFisicaRow.localTextPrefix; };
            AvaliacaoFisicaDialog.prototype.getNameProperty = function () { return AvaliacaoFisica.AvaliacaoFisicaRow.nameProperty; };
            AvaliacaoFisicaDialog.prototype.getService = function () { return AvaliacaoFisica.AvaliacaoFisicaService.baseUrl; };
            AvaliacaoFisicaDialog.prototype.getDeletePermission = function () { return AvaliacaoFisica.AvaliacaoFisicaRow.deletePermission; };
            AvaliacaoFisicaDialog.prototype.getInsertPermission = function () { return AvaliacaoFisica.AvaliacaoFisicaRow.insertPermission; };
            AvaliacaoFisicaDialog.prototype.getUpdatePermission = function () { return AvaliacaoFisica.AvaliacaoFisicaRow.updatePermission; };
            AvaliacaoFisicaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AvaliacaoFisicaDialog);
            return AvaliacaoFisicaDialog;
        }(Serenity.EntityDialog));
        AvaliacaoFisica.AvaliacaoFisicaDialog = AvaliacaoFisicaDialog;
    })(AvaliacaoFisica = GymAction.AvaliacaoFisica || (GymAction.AvaliacaoFisica = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var AvaliacaoFisica;
    (function (AvaliacaoFisica) {
        var AvaliacaoFisicaGrid = /** @class */ (function (_super) {
            __extends(AvaliacaoFisicaGrid, _super);
            function AvaliacaoFisicaGrid(container) {
                return _super.call(this, container) || this;
            }
            AvaliacaoFisicaGrid.prototype.getColumnsKey = function () { return 'AvaliacaoFisica.AvaliacaoFisica'; };
            AvaliacaoFisicaGrid.prototype.getDialogType = function () { return AvaliacaoFisica.AvaliacaoFisicaDialog; };
            AvaliacaoFisicaGrid.prototype.getIdProperty = function () { return AvaliacaoFisica.AvaliacaoFisicaRow.idProperty; };
            AvaliacaoFisicaGrid.prototype.getInsertPermission = function () { return AvaliacaoFisica.AvaliacaoFisicaRow.insertPermission; };
            AvaliacaoFisicaGrid.prototype.getLocalTextPrefix = function () { return AvaliacaoFisica.AvaliacaoFisicaRow.localTextPrefix; };
            AvaliacaoFisicaGrid.prototype.getService = function () { return AvaliacaoFisica.AvaliacaoFisicaService.baseUrl; };
            AvaliacaoFisicaGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'AvaliacaoFisica/AvaliacaoFisica/ListExcel',
                    separator: true
                }));
                buttons.push(GymAction.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            AvaliacaoFisicaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AvaliacaoFisicaGrid);
            return AvaliacaoFisicaGrid;
        }(Serenity.EntityGrid));
        AvaliacaoFisica.AvaliacaoFisicaGrid = AvaliacaoFisicaGrid;
    })(AvaliacaoFisica = GymAction.AvaliacaoFisica || (GymAction.AvaliacaoFisica = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Cliente;
    (function (Cliente) {
        var ClienteDialog = /** @class */ (function (_super) {
            __extends(ClienteDialog, _super);
            function ClienteDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Cliente.ClienteForm(_this.idPrefix);
                return _this;
            }
            ClienteDialog.prototype.getFormKey = function () { return Cliente.ClienteForm.formKey; };
            ClienteDialog.prototype.getIdProperty = function () { return Cliente.ClienteRow.idProperty; };
            ClienteDialog.prototype.getLocalTextPrefix = function () { return Cliente.ClienteRow.localTextPrefix; };
            ClienteDialog.prototype.getNameProperty = function () { return Cliente.ClienteRow.nameProperty; };
            ClienteDialog.prototype.getService = function () { return Cliente.ClienteService.baseUrl; };
            ClienteDialog.prototype.getDeletePermission = function () { return Cliente.ClienteRow.deletePermission; };
            ClienteDialog.prototype.getInsertPermission = function () { return Cliente.ClienteRow.insertPermission; };
            ClienteDialog.prototype.getUpdatePermission = function () { return Cliente.ClienteRow.updatePermission; };
            ClienteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ClienteDialog);
            return ClienteDialog;
        }(Serenity.EntityDialog));
        Cliente.ClienteDialog = ClienteDialog;
    })(Cliente = GymAction.Cliente || (GymAction.Cliente = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Cliente;
    (function (Cliente) {
        var ClienteGrid = /** @class */ (function (_super) {
            __extends(ClienteGrid, _super);
            function ClienteGrid(container) {
                return _super.call(this, container) || this;
            }
            ClienteGrid.prototype.getColumnsKey = function () { return 'Cliente.Cliente'; };
            ClienteGrid.prototype.getDialogType = function () { return Cliente.ClienteDialog; };
            ClienteGrid.prototype.getIdProperty = function () { return Cliente.ClienteRow.idProperty; };
            ClienteGrid.prototype.getInsertPermission = function () { return Cliente.ClienteRow.insertPermission; };
            ClienteGrid.prototype.getLocalTextPrefix = function () { return Cliente.ClienteRow.localTextPrefix; };
            ClienteGrid.prototype.getService = function () { return Cliente.ClienteService.baseUrl; };
            ClienteGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Cliente/Cliente/ListExcel',
                    separator: true
                }));
                buttons.push(GymAction.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ClienteGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ClienteGrid);
            return ClienteGrid;
        }(Serenity.EntityGrid));
        Cliente.ClienteGrid = ClienteGrid;
    })(Cliente = GymAction.Cliente || (GymAction.Cliente = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var ClientePlanoAula;
    (function (ClientePlanoAula) {
        var ClientePlanoAulaDialog = /** @class */ (function (_super) {
            __extends(ClientePlanoAulaDialog, _super);
            function ClientePlanoAulaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new ClientePlanoAula.ClientePlanoAulaForm(_this.idPrefix);
                return _this;
            }
            ClientePlanoAulaDialog.prototype.getFormKey = function () { return ClientePlanoAula.ClientePlanoAulaForm.formKey; };
            ClientePlanoAulaDialog.prototype.getIdProperty = function () { return ClientePlanoAula.ClientePlanoAulaRow.idProperty; };
            ClientePlanoAulaDialog.prototype.getLocalTextPrefix = function () { return ClientePlanoAula.ClientePlanoAulaRow.localTextPrefix; };
            ClientePlanoAulaDialog.prototype.getService = function () { return ClientePlanoAula.ClientePlanoAulaService.baseUrl; };
            ClientePlanoAulaDialog.prototype.getDeletePermission = function () { return ClientePlanoAula.ClientePlanoAulaRow.deletePermission; };
            ClientePlanoAulaDialog.prototype.getInsertPermission = function () { return ClientePlanoAula.ClientePlanoAulaRow.insertPermission; };
            ClientePlanoAulaDialog.prototype.getUpdatePermission = function () { return ClientePlanoAula.ClientePlanoAulaRow.updatePermission; };
            ClientePlanoAulaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ClientePlanoAulaDialog);
            return ClientePlanoAulaDialog;
        }(Serenity.EntityDialog));
        ClientePlanoAula.ClientePlanoAulaDialog = ClientePlanoAulaDialog;
    })(ClientePlanoAula = GymAction.ClientePlanoAula || (GymAction.ClientePlanoAula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var ClientePlanoAula;
    (function (ClientePlanoAula) {
        var ClientePlanoAulaGrid = /** @class */ (function (_super) {
            __extends(ClientePlanoAulaGrid, _super);
            function ClientePlanoAulaGrid(container) {
                return _super.call(this, container) || this;
            }
            ClientePlanoAulaGrid.prototype.getColumnsKey = function () { return 'ClientePlanoAula.ClientePlanoAula'; };
            ClientePlanoAulaGrid.prototype.getDialogType = function () { return ClientePlanoAula.ClientePlanoAulaDialog; };
            ClientePlanoAulaGrid.prototype.getIdProperty = function () { return ClientePlanoAula.ClientePlanoAulaRow.idProperty; };
            ClientePlanoAulaGrid.prototype.getInsertPermission = function () { return ClientePlanoAula.ClientePlanoAulaRow.insertPermission; };
            ClientePlanoAulaGrid.prototype.getLocalTextPrefix = function () { return ClientePlanoAula.ClientePlanoAulaRow.localTextPrefix; };
            ClientePlanoAulaGrid.prototype.getService = function () { return ClientePlanoAula.ClientePlanoAulaService.baseUrl; };
            ClientePlanoAulaGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'ClientePlanoAula/ClientePlanoAula/ListExcel',
                    separator: true
                }));
                buttons.push(GymAction.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ClientePlanoAulaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ClientePlanoAulaGrid);
            return ClientePlanoAulaGrid;
        }(Serenity.EntityGrid));
        ClientePlanoAula.ClientePlanoAulaGrid = ClientePlanoAulaGrid;
    })(ClientePlanoAula = GymAction.ClientePlanoAula || (GymAction.ClientePlanoAula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = GymAction.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = GymAction.LanguageList || (GymAction.LanguageList = {}));
})(GymAction || (GymAction = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var GymAction;
(function (GymAction) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('GymAction');
        Serenity.EntityDialog.defaultLanguageList = GymAction.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = GymAction.ScriptInitialization || (GymAction.ScriptInitialization = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: false,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    GymAction.BasicProgressDialog = BasicProgressDialog;
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new GymAction.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = GymAction.Common || (GymAction.Common = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = GymAction.DialogUtils || (GymAction.DialogUtils = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = GymAction.Common || (GymAction.Common = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = GymAction.Common || (GymAction.Common = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var addButton = Q.tryFirst(buttons, function (x) { return x.cssClass == 'add-button'; });
                if (addButton != null) {
                    addButton.onClick = function () {
                        _this.createEntityDialog(_this.getItemType(), function (dlg) {
                            var dialog = dlg;
                            dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                            _this.transferDialogReadOnly(dialog);
                            dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                        });
                    };
                }
                return buttons.filter(function (x) { return x.cssClass != "refresh-button"; });
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    _this.transferDialogReadOnly(dialog);
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: false,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase.prototype.enableDeleteColumn = function () {
                return false;
            };
            GridEditorBase.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.enableDeleteColumn()) {
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                return columns;
            };
            GridEditorBase.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (this.enableDeleteColumn()) {
                        if (target.hasClass('delete-row')) {
                            Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                                _this.deleteEntity(item[_this.getIdProperty()]);
                            });
                        }
                    }
                }
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = GymAction.Common || (GymAction.Common = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = GymAction.Common || (GymAction.Common = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    GymAction.StaticTextBlock = StaticTextBlock;
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = GymAction.Common || (GymAction.Common = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = GymAction.Common || (GymAction.Common = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = GymAction.Common || (GymAction.Common = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = GymAction.Common || (GymAction.Common = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = GymAction.Common || (GymAction.Common = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = GymAction.Common || (GymAction.Common = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = GymAction.Common || (GymAction.Common = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = GymAction.Common || (GymAction.Common = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Ferias;
    (function (Ferias) {
        var FeriasDialog = /** @class */ (function (_super) {
            __extends(FeriasDialog, _super);
            function FeriasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ferias.FeriasForm(_this.idPrefix);
                return _this;
            }
            FeriasDialog.prototype.getFormKey = function () { return Ferias.FeriasForm.formKey; };
            FeriasDialog.prototype.getIdProperty = function () { return Ferias.FeriasRow.idProperty; };
            FeriasDialog.prototype.getLocalTextPrefix = function () { return Ferias.FeriasRow.localTextPrefix; };
            FeriasDialog.prototype.getService = function () { return Ferias.FeriasService.baseUrl; };
            FeriasDialog.prototype.getDeletePermission = function () { return Ferias.FeriasRow.deletePermission; };
            FeriasDialog.prototype.getInsertPermission = function () { return Ferias.FeriasRow.insertPermission; };
            FeriasDialog.prototype.getUpdatePermission = function () { return Ferias.FeriasRow.updatePermission; };
            FeriasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FeriasDialog);
            return FeriasDialog;
        }(Serenity.EntityDialog));
        Ferias.FeriasDialog = FeriasDialog;
    })(Ferias = GymAction.Ferias || (GymAction.Ferias = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Ferias;
    (function (Ferias) {
        var FeriasGrid = /** @class */ (function (_super) {
            __extends(FeriasGrid, _super);
            function FeriasGrid(container) {
                return _super.call(this, container) || this;
            }
            FeriasGrid.prototype.getColumnsKey = function () { return 'Ferias.Ferias'; };
            FeriasGrid.prototype.getDialogType = function () { return Ferias.FeriasDialog; };
            FeriasGrid.prototype.getIdProperty = function () { return Ferias.FeriasRow.idProperty; };
            FeriasGrid.prototype.getInsertPermission = function () { return Ferias.FeriasRow.insertPermission; };
            FeriasGrid.prototype.getLocalTextPrefix = function () { return Ferias.FeriasRow.localTextPrefix; };
            FeriasGrid.prototype.getService = function () { return Ferias.FeriasService.baseUrl; };
            FeriasGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Ferias/Ferias/ListExcel',
                    separator: true
                }));
                buttons.push(GymAction.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            FeriasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FeriasGrid);
            return FeriasGrid;
        }(Serenity.EntityGrid));
        Ferias.FeriasGrid = FeriasGrid;
    })(Ferias = GymAction.Ferias || (GymAction.Ferias = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Fisioterapeuta;
    (function (Fisioterapeuta) {
        var FisioterapeutaDialog = /** @class */ (function (_super) {
            __extends(FisioterapeutaDialog, _super);
            function FisioterapeutaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Fisioterapeuta.FisioterapeutaForm(_this.idPrefix);
                return _this;
            }
            FisioterapeutaDialog.prototype.getFormKey = function () { return Fisioterapeuta.FisioterapeutaForm.formKey; };
            FisioterapeutaDialog.prototype.getIdProperty = function () { return Fisioterapeuta.FisioterapeutaRow.idProperty; };
            FisioterapeutaDialog.prototype.getLocalTextPrefix = function () { return Fisioterapeuta.FisioterapeutaRow.localTextPrefix; };
            FisioterapeutaDialog.prototype.getNameProperty = function () { return Fisioterapeuta.FisioterapeutaRow.nameProperty; };
            FisioterapeutaDialog.prototype.getService = function () { return Fisioterapeuta.FisioterapeutaService.baseUrl; };
            FisioterapeutaDialog.prototype.getDeletePermission = function () { return Fisioterapeuta.FisioterapeutaRow.deletePermission; };
            FisioterapeutaDialog.prototype.getInsertPermission = function () { return Fisioterapeuta.FisioterapeutaRow.insertPermission; };
            FisioterapeutaDialog.prototype.getUpdatePermission = function () { return Fisioterapeuta.FisioterapeutaRow.updatePermission; };
            FisioterapeutaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FisioterapeutaDialog);
            return FisioterapeutaDialog;
        }(Serenity.EntityDialog));
        Fisioterapeuta.FisioterapeutaDialog = FisioterapeutaDialog;
    })(Fisioterapeuta = GymAction.Fisioterapeuta || (GymAction.Fisioterapeuta = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Fisioterapeuta;
    (function (Fisioterapeuta) {
        var FisioterapeutaGrid = /** @class */ (function (_super) {
            __extends(FisioterapeutaGrid, _super);
            function FisioterapeutaGrid(container) {
                return _super.call(this, container) || this;
            }
            FisioterapeutaGrid.prototype.getColumnsKey = function () { return 'Fisioterapeuta.Fisioterapeuta'; };
            FisioterapeutaGrid.prototype.getDialogType = function () { return Fisioterapeuta.FisioterapeutaDialog; };
            FisioterapeutaGrid.prototype.getIdProperty = function () { return Fisioterapeuta.FisioterapeutaRow.idProperty; };
            FisioterapeutaGrid.prototype.getInsertPermission = function () { return Fisioterapeuta.FisioterapeutaRow.insertPermission; };
            FisioterapeutaGrid.prototype.getLocalTextPrefix = function () { return Fisioterapeuta.FisioterapeutaRow.localTextPrefix; };
            FisioterapeutaGrid.prototype.getService = function () { return Fisioterapeuta.FisioterapeutaService.baseUrl; };
            FisioterapeutaGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Fisioterapeuta/Fisioterapeuta/ListExcel',
                    separator: true
                }));
                buttons.push(GymAction.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            FisioterapeutaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FisioterapeutaGrid);
            return FisioterapeutaGrid;
        }(Serenity.EntityGrid));
        Fisioterapeuta.FisioterapeutaGrid = FisioterapeutaGrid;
    })(Fisioterapeuta = GymAction.Fisioterapeuta || (GymAction.Fisioterapeuta = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Instrutor;
    (function (Instrutor) {
        var InstrutorDialog = /** @class */ (function (_super) {
            __extends(InstrutorDialog, _super);
            function InstrutorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Instrutor.InstrutorForm(_this.idPrefix);
                return _this;
            }
            InstrutorDialog.prototype.getFormKey = function () { return Instrutor.InstrutorForm.formKey; };
            InstrutorDialog.prototype.getIdProperty = function () { return Instrutor.InstrutorRow.idProperty; };
            InstrutorDialog.prototype.getLocalTextPrefix = function () { return Instrutor.InstrutorRow.localTextPrefix; };
            InstrutorDialog.prototype.getNameProperty = function () { return Instrutor.InstrutorRow.nameProperty; };
            InstrutorDialog.prototype.getService = function () { return Instrutor.InstrutorService.baseUrl; };
            InstrutorDialog.prototype.getDeletePermission = function () { return Instrutor.InstrutorRow.deletePermission; };
            InstrutorDialog.prototype.getInsertPermission = function () { return Instrutor.InstrutorRow.insertPermission; };
            InstrutorDialog.prototype.getUpdatePermission = function () { return Instrutor.InstrutorRow.updatePermission; };
            InstrutorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InstrutorDialog);
            return InstrutorDialog;
        }(Serenity.EntityDialog));
        Instrutor.InstrutorDialog = InstrutorDialog;
    })(Instrutor = GymAction.Instrutor || (GymAction.Instrutor = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Instrutor;
    (function (Instrutor) {
        var InstrutorGrid = /** @class */ (function (_super) {
            __extends(InstrutorGrid, _super);
            function InstrutorGrid(container) {
                return _super.call(this, container) || this;
            }
            InstrutorGrid.prototype.getColumnsKey = function () { return 'Instrutor.Instrutor'; };
            InstrutorGrid.prototype.getDialogType = function () { return Instrutor.InstrutorDialog; };
            InstrutorGrid.prototype.getIdProperty = function () { return Instrutor.InstrutorRow.idProperty; };
            InstrutorGrid.prototype.getInsertPermission = function () { return Instrutor.InstrutorRow.insertPermission; };
            InstrutorGrid.prototype.getLocalTextPrefix = function () { return Instrutor.InstrutorRow.localTextPrefix; };
            InstrutorGrid.prototype.getService = function () { return Instrutor.InstrutorService.baseUrl; };
            InstrutorGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Instrutor/Instrutor/ListExcel',
                    separator: true
                }));
                buttons.push(GymAction.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            InstrutorGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InstrutorGrid);
            return InstrutorGrid;
        }(Serenity.EntityGrid));
        Instrutor.InstrutorGrid = InstrutorGrid;
    })(Instrutor = GymAction.Instrutor || (GymAction.Instrutor = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = GymAction.Membership || (GymAction.Membership = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = GymAction.Membership || (GymAction.Membership = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = GymAction.Membership || (GymAction.Membership = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = GymAction.Membership || (GymAction.Membership = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = GymAction.Membership || (GymAction.Membership = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Pagamento;
    (function (Pagamento) {
        var PagamentoDialog = /** @class */ (function (_super) {
            __extends(PagamentoDialog, _super);
            function PagamentoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Pagamento.PagamentoForm(_this.idPrefix);
                return _this;
            }
            PagamentoDialog.prototype.getFormKey = function () { return Pagamento.PagamentoForm.formKey; };
            PagamentoDialog.prototype.getIdProperty = function () { return Pagamento.PagamentoRow.idProperty; };
            PagamentoDialog.prototype.getLocalTextPrefix = function () { return Pagamento.PagamentoRow.localTextPrefix; };
            PagamentoDialog.prototype.getService = function () { return Pagamento.PagamentoService.baseUrl; };
            PagamentoDialog.prototype.getDeletePermission = function () { return Pagamento.PagamentoRow.deletePermission; };
            PagamentoDialog.prototype.getInsertPermission = function () { return Pagamento.PagamentoRow.insertPermission; };
            PagamentoDialog.prototype.getUpdatePermission = function () { return Pagamento.PagamentoRow.updatePermission; };
            PagamentoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PagamentoDialog);
            return PagamentoDialog;
        }(Serenity.EntityDialog));
        Pagamento.PagamentoDialog = PagamentoDialog;
    })(Pagamento = GymAction.Pagamento || (GymAction.Pagamento = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Pagamento;
    (function (Pagamento) {
        var PagamentoGrid = /** @class */ (function (_super) {
            __extends(PagamentoGrid, _super);
            function PagamentoGrid(container) {
                return _super.call(this, container) || this;
            }
            PagamentoGrid.prototype.getColumnsKey = function () { return 'Pagamento.Pagamento'; };
            PagamentoGrid.prototype.getDialogType = function () { return Pagamento.PagamentoDialog; };
            PagamentoGrid.prototype.getIdProperty = function () { return Pagamento.PagamentoRow.idProperty; };
            PagamentoGrid.prototype.getInsertPermission = function () { return Pagamento.PagamentoRow.insertPermission; };
            PagamentoGrid.prototype.getLocalTextPrefix = function () { return Pagamento.PagamentoRow.localTextPrefix; };
            PagamentoGrid.prototype.getService = function () { return Pagamento.PagamentoService.baseUrl; };
            PagamentoGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Pagamento/Pagamento/ListExcel',
                    separator: true
                }));
                buttons.push(GymAction.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            PagamentoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PagamentoGrid);
            return PagamentoGrid;
        }(Serenity.EntityGrid));
        Pagamento.PagamentoGrid = PagamentoGrid;
    })(Pagamento = GymAction.Pagamento || (GymAction.Pagamento = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Plano;
    (function (Plano) {
        var PlanoDialog = /** @class */ (function (_super) {
            __extends(PlanoDialog, _super);
            function PlanoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Plano.PlanoForm(_this.idPrefix);
                return _this;
            }
            PlanoDialog.prototype.getFormKey = function () { return Plano.PlanoForm.formKey; };
            PlanoDialog.prototype.getIdProperty = function () { return Plano.PlanoRow.idProperty; };
            PlanoDialog.prototype.getLocalTextPrefix = function () { return Plano.PlanoRow.localTextPrefix; };
            PlanoDialog.prototype.getNameProperty = function () { return Plano.PlanoRow.nameProperty; };
            PlanoDialog.prototype.getService = function () { return Plano.PlanoService.baseUrl; };
            PlanoDialog.prototype.getDeletePermission = function () { return Plano.PlanoRow.deletePermission; };
            PlanoDialog.prototype.getInsertPermission = function () { return Plano.PlanoRow.insertPermission; };
            PlanoDialog.prototype.getUpdatePermission = function () { return Plano.PlanoRow.updatePermission; };
            PlanoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PlanoDialog);
            return PlanoDialog;
        }(Serenity.EntityDialog));
        Plano.PlanoDialog = PlanoDialog;
    })(Plano = GymAction.Plano || (GymAction.Plano = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var Plano;
    (function (Plano) {
        var PlanoGrid = /** @class */ (function (_super) {
            __extends(PlanoGrid, _super);
            function PlanoGrid(container) {
                return _super.call(this, container) || this;
            }
            PlanoGrid.prototype.getColumnsKey = function () { return 'Plano.Plano'; };
            PlanoGrid.prototype.getDialogType = function () { return Plano.PlanoDialog; };
            PlanoGrid.prototype.getIdProperty = function () { return Plano.PlanoRow.idProperty; };
            PlanoGrid.prototype.getInsertPermission = function () { return Plano.PlanoRow.insertPermission; };
            PlanoGrid.prototype.getLocalTextPrefix = function () { return Plano.PlanoRow.localTextPrefix; };
            PlanoGrid.prototype.getService = function () { return Plano.PlanoService.baseUrl; };
            PlanoGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Plano/Plano/ListExcel',
                    separator: true
                }));
                buttons.push(GymAction.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            PlanoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PlanoGrid);
            return PlanoGrid;
        }(Serenity.EntityGrid));
        Plano.PlanoGrid = PlanoGrid;
    })(Plano = GymAction.Plano || (GymAction.Plano = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var PlanoAula;
    (function (PlanoAula) {
        var PlanoAulaDialog = /** @class */ (function (_super) {
            __extends(PlanoAulaDialog, _super);
            function PlanoAulaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PlanoAula.PlanoAulaForm(_this.idPrefix);
                return _this;
            }
            PlanoAulaDialog.prototype.getFormKey = function () { return PlanoAula.PlanoAulaForm.formKey; };
            PlanoAulaDialog.prototype.getIdProperty = function () { return PlanoAula.PlanoAulaRow.idProperty; };
            PlanoAulaDialog.prototype.getLocalTextPrefix = function () { return PlanoAula.PlanoAulaRow.localTextPrefix; };
            PlanoAulaDialog.prototype.getService = function () { return PlanoAula.PlanoAulaService.baseUrl; };
            PlanoAulaDialog.prototype.getDeletePermission = function () { return PlanoAula.PlanoAulaRow.deletePermission; };
            PlanoAulaDialog.prototype.getInsertPermission = function () { return PlanoAula.PlanoAulaRow.insertPermission; };
            PlanoAulaDialog.prototype.getUpdatePermission = function () { return PlanoAula.PlanoAulaRow.updatePermission; };
            PlanoAulaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PlanoAulaDialog);
            return PlanoAulaDialog;
        }(Serenity.EntityDialog));
        PlanoAula.PlanoAulaDialog = PlanoAulaDialog;
    })(PlanoAula = GymAction.PlanoAula || (GymAction.PlanoAula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var PlanoAula;
    (function (PlanoAula) {
        var PlanoAulaGrid = /** @class */ (function (_super) {
            __extends(PlanoAulaGrid, _super);
            function PlanoAulaGrid(container) {
                return _super.call(this, container) || this;
            }
            PlanoAulaGrid.prototype.getColumnsKey = function () { return 'PlanoAula.PlanoAula'; };
            PlanoAulaGrid.prototype.getDialogType = function () { return PlanoAula.PlanoAulaDialog; };
            PlanoAulaGrid.prototype.getIdProperty = function () { return PlanoAula.PlanoAulaRow.idProperty; };
            PlanoAulaGrid.prototype.getInsertPermission = function () { return PlanoAula.PlanoAulaRow.insertPermission; };
            PlanoAulaGrid.prototype.getLocalTextPrefix = function () { return PlanoAula.PlanoAulaRow.localTextPrefix; };
            PlanoAulaGrid.prototype.getService = function () { return PlanoAula.PlanoAulaService.baseUrl; };
            PlanoAulaGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'PlanoAula/PlanoAula/ListExcel',
                    separator: true
                }));
                buttons.push(GymAction.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            PlanoAulaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PlanoAulaGrid);
            return PlanoAulaGrid;
        }(Serenity.EntityGrid));
        PlanoAula.PlanoAulaGrid = PlanoAulaGrid;
    })(PlanoAula = GymAction.PlanoAula || (GymAction.PlanoAula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var RegistroAula;
    (function (RegistroAula) {
        var RegistroAulaDialog = /** @class */ (function (_super) {
            __extends(RegistroAulaDialog, _super);
            function RegistroAulaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new RegistroAula.RegistroAulaForm(_this.idPrefix);
                return _this;
            }
            RegistroAulaDialog.prototype.getFormKey = function () { return RegistroAula.RegistroAulaForm.formKey; };
            RegistroAulaDialog.prototype.getIdProperty = function () { return RegistroAula.RegistroAulaRow.idProperty; };
            RegistroAulaDialog.prototype.getLocalTextPrefix = function () { return RegistroAula.RegistroAulaRow.localTextPrefix; };
            RegistroAulaDialog.prototype.getService = function () { return RegistroAula.RegistroAulaService.baseUrl; };
            RegistroAulaDialog.prototype.getDeletePermission = function () { return RegistroAula.RegistroAulaRow.deletePermission; };
            RegistroAulaDialog.prototype.getInsertPermission = function () { return RegistroAula.RegistroAulaRow.insertPermission; };
            RegistroAulaDialog.prototype.getUpdatePermission = function () { return RegistroAula.RegistroAulaRow.updatePermission; };
            RegistroAulaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RegistroAulaDialog);
            return RegistroAulaDialog;
        }(Serenity.EntityDialog));
        RegistroAula.RegistroAulaDialog = RegistroAulaDialog;
    })(RegistroAula = GymAction.RegistroAula || (GymAction.RegistroAula = {}));
})(GymAction || (GymAction = {}));
var GymAction;
(function (GymAction) {
    var RegistroAula;
    (function (RegistroAula) {
        var RegistroAulaGrid = /** @class */ (function (_super) {
            __extends(RegistroAulaGrid, _super);
            function RegistroAulaGrid(container) {
                return _super.call(this, container) || this;
            }
            RegistroAulaGrid.prototype.getColumnsKey = function () { return 'RegistroAula.RegistroAula'; };
            RegistroAulaGrid.prototype.getDialogType = function () { return RegistroAula.RegistroAulaDialog; };
            RegistroAulaGrid.prototype.getIdProperty = function () { return RegistroAula.RegistroAulaRow.idProperty; };
            RegistroAulaGrid.prototype.getInsertPermission = function () { return RegistroAula.RegistroAulaRow.insertPermission; };
            RegistroAulaGrid.prototype.getLocalTextPrefix = function () { return RegistroAula.RegistroAulaRow.localTextPrefix; };
            RegistroAulaGrid.prototype.getService = function () { return RegistroAula.RegistroAulaService.baseUrl; };
            RegistroAulaGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'RegistroAula/RegistroAula/ListExcel',
                    separator: true
                }));
                buttons.push(GymAction.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            RegistroAulaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RegistroAulaGrid);
            return RegistroAulaGrid;
        }(Serenity.EntityGrid));
        RegistroAula.RegistroAulaGrid = RegistroAulaGrid;
    })(RegistroAula = GymAction.RegistroAula || (GymAction.RegistroAula = {}));
})(GymAction || (GymAction = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3ltQWN0aW9uLldlYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5QZXJtaXNzaW9uS2V5cy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uTGlzdFJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5TZXJnZW5Db25uZWN0aW9uLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlNlcmdlbkdlbmVyYXRlT3B0aW9ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5TZXJnZW5HZW5lcmF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uU2VyZ2VuTGlzdFRhYmxlc1JlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uU2VyZ2VuU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5TZXJnZW5UYWJsZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbkl0ZW0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25Sb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZUxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlTGlzdFJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BdWxhLkF1bGFDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0F1bGEuQXVsYUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQXVsYS5BdWxhUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0F1bGEuQXVsYVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQXVsYS5BdWxhVGlwby50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BdWxhSW5zdHJ1dG9yLkF1bGFJbnN0cnV0b3JDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0F1bGFJbnN0cnV0b3IuQXVsYUluc3RydXRvckZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQXVsYUluc3RydXRvci5BdWxhSW5zdHJ1dG9yUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0F1bGFJbnN0cnV0b3IuQXVsYUluc3RydXRvclNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQXZhbGlhY2FvRmlzaWNhLkF2YWxpYWNhb0Zpc2ljYUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQXZhbGlhY2FvRmlzaWNhLkF2YWxpYWNhb0Zpc2ljYUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQXZhbGlhY2FvRmlzaWNhLkF2YWxpYWNhb0Zpc2ljYVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BdmFsaWFjYW9GaXNpY2EuQXZhbGlhY2FvRmlzaWNhU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9DbGllbnRlLkNsaWVudGVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NsaWVudGUuQ2xpZW50ZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ2xpZW50ZS5DbGllbnRlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NsaWVudGUuQ2xpZW50ZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ2xpZW50ZVBsYW5vQXVsYS5DbGllbnRlUGxhbm9BdWxhQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9DbGllbnRlUGxhbm9BdWxhLkNsaWVudGVQbGFub0F1bGFGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NsaWVudGVQbGFub0F1bGEuQ2xpZW50ZVBsYW5vQXVsYVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9DbGllbnRlUGxhbm9BdWxhLkNsaWVudGVQbGFub0F1bGFTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5Vc2VyUHJlZmVyZW5jZVJldHJpZXZlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uVXNlclByZWZlcmVuY2VSZXRyaWV2ZVJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5Vc2VyUHJlZmVyZW5jZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uVXNlclByZWZlcmVuY2VTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5Vc2VyUHJlZmVyZW5jZVVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRXhjZWxJbXBvcnRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0V4Y2VsSW1wb3J0UmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRmVyaWFzLkZlcmlhc0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRmVyaWFzLkZlcmlhc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRmVyaWFzLkZlcmlhc1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9GZXJpYXMuRmVyaWFzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9GaXNpb3RlcmFwZXV0YS5GaXNpb3RlcmFwZXV0YUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRmlzaW90ZXJhcGV1dGEuRmlzaW90ZXJhcGV1dGFGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0Zpc2lvdGVyYXBldXRhLkZpc2lvdGVyYXBldXRhUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0Zpc2lvdGVyYXBldXRhLkZpc2lvdGVyYXBldXRhU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9HZXROZXh0TnVtYmVyUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9HZXROZXh0TnVtYmVyUmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvSW5zdHJ1dG9yLkluc3RydXRvckNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvSW5zdHJ1dG9yLkluc3RydXRvckZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvSW5zdHJ1dG9yLkluc3RydXRvclJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9JbnN0cnV0b3IuSW5zdHJ1dG9yU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9JbnN0cnV0b3IuSW5zdHJ1dG9yVGlwby50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5TaWduVXBGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuU2lnblVwUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QYWdhbWVudG8uUGFnYW1lbnRvQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QYWdhbWVudG8uUGFnYW1lbnRvRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QYWdhbWVudG8uUGFnYW1lbnRvUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1BhZ2FtZW50by5QYWdhbWVudG9TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1BsYW5vLlBsYW5vQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QbGFuby5QbGFub0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvUGxhbm8uUGxhbm9Sb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvUGxhbm8uUGxhbm9TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1BsYW5vLlBsYW5vVGlwby50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QbGFub0F1bGEuUGxhbm9BdWxhQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QbGFub0F1bGEuUGxhbm9BdWxhRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QbGFub0F1bGEuUGxhbm9BdWxhUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1BsYW5vQXVsYS5QbGFub0F1bGFTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1JlZ2lzdHJvQXVsYS5SZWdpc3Ryb0F1bGFDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1JlZ2lzdHJvQXVsYS5SZWdpc3Ryb0F1bGFGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1JlZ2lzdHJvQXVsYS5SZWdpc3Ryb0F1bGFSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvUmVnaXN0cm9BdWxhLlJlZ2lzdHJvQXVsYVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2NyaXB0VXNlckRlZmluaXRpb24udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvVGV4dHMudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xhbmd1YWdlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9MYW5ndWFnZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1JvbGUvUm9sZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZS9Sb2xlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vUm9sZVBlcm1pc3Npb25EaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1Nlcmdlbi9TZXJnZW5QYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vVHJhbnNsYXRpb25HcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL1VzZXJEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvVXNlckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvQXV0aGVudGljYXRpb24vQXV0aG9yaXphdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vUGVybWlzc2lvbkNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9Vc2VyUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvUm9sZUNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9Vc2VyUm9sZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQXVsYS9BdWxhL0F1bGFEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0F1bGEvQXVsYS9BdWxhR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQXVsYUluc3RydXRvci9BdWxhSW5zdHJ1dG9yL0F1bGFJbnN0cnV0b3JEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0F1bGFJbnN0cnV0b3IvQXVsYUluc3RydXRvci9BdWxhSW5zdHJ1dG9yR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQXZhbGlhY2FvRmlzaWNhL0F2YWxpYWNhb0Zpc2ljYS9BdmFsaWFjYW9GaXNpY2FEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0F2YWxpYWNhb0Zpc2ljYS9BdmFsaWFjYW9GaXNpY2EvQXZhbGlhY2FvRmlzaWNhR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ2xpZW50ZS9DbGllbnRlL0NsaWVudGVEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NsaWVudGUvQ2xpZW50ZS9DbGllbnRlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ2xpZW50ZVBsYW5vQXVsYS9DbGllbnRlUGxhbm9BdWxhL0NsaWVudGVQbGFub0F1bGFEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NsaWVudGVQbGFub0F1bGEvQ2xpZW50ZVBsYW5vQXVsYS9DbGllbnRlUGxhbm9BdWxhR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvTGFuZ3VhZ2VMaXN0LnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vU2NyaXB0SW5pdGlhbGl6YXRpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0Jhc2ljUHJvZ3Jlc3NEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0J1bGtTZXJ2aWNlQWN0aW9uLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9EaWFsb2dVdGlscy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvRW51bVNlbGVjdEZvcm1hdHRlci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvRXhjZWxFeHBvcnRIZWxwZXIudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0dyaWRFZGl0b3JCYXNlLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9HcmlkRWRpdG9yRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9TdGF0aWNUZXh0QmxvY2sudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9OYXZpZ2F0aW9uL0xhbmd1YWdlU2VsZWN0aW9uLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vTmF2aWdhdGlvbi9TaWRlYmFyU2VhcmNoLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vTmF2aWdhdGlvbi9UaGVtZVNlbGVjdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1JlcG9ydGluZy9QZGZFeHBvcnRIZWxwZXIudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9SZXBvcnRpbmcvUmVwb3J0RGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vUmVwb3J0aW5nL1JlcG9ydEhlbHBlci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1JlcG9ydGluZy9SZXBvcnRQYWdlLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vVXNlclByZWZlcmVuY2UvVXNlclByZWZlcmVuY2VTdG9yYWdlLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9GZXJpYXMvRmVyaWFzL0Zlcmlhc0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvRmVyaWFzL0Zlcmlhcy9GZXJpYXNHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9GaXNpb3RlcmFwZXV0YS9GaXNpb3RlcmFwZXV0YS9GaXNpb3RlcmFwZXV0YURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvRmlzaW90ZXJhcGV1dGEvRmlzaW90ZXJhcGV1dGEvRmlzaW90ZXJhcGV1dGFHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9JbnN0cnV0b3IvSW5zdHJ1dG9yL0luc3RydXRvckRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvSW5zdHJ1dG9yL0luc3RydXRvci9JbnN0cnV0b3JHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvTG9naW5QYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0NoYW5nZVBhc3N3b3JkL0NoYW5nZVBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvUmVzZXRQYXNzd29yZC9SZXNldFBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9TaWduVXAvU2lnblVwUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1BhZ2FtZW50by9QYWdhbWVudG8vUGFnYW1lbnRvRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9QYWdhbWVudG8vUGFnYW1lbnRvL1BhZ2FtZW50b0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1BsYW5vL1BsYW5vL1BsYW5vRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9QbGFuby9QbGFuby9QbGFub0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1BsYW5vQXVsYS9QbGFub0F1bGEvUGxhbm9BdWxhRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9QbGFub0F1bGEvUGxhbm9BdWxhL1BsYW5vQXVsYUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1JlZ2lzdHJvQXVsYS9SZWdpc3Ryb0F1bGEvUmVnaXN0cm9BdWxhRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9SZWdpc3Ryb0F1bGEvUmVnaXN0cm9BdWxhL1JlZ2lzdHJvQXVsYUdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFDQUEsSUFBVSxTQUFTLENBMEJsQjtBQTFCRCxXQUFVLFNBQVM7SUFBQyxJQUFBLGNBQWMsQ0EwQmpDO0lB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QUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxFQUFDLElBQUksRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsYUFBYSxFQUFDLEVBQUMsYUFBYSxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsdUJBQXVCLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLDRCQUE0QixFQUFDLENBQUMsRUFB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YyxFQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsdUJBQXVCLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsc0JBQXNCLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxxQkFBcUIsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsdUJBQXVCLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLHVCQUF1QixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsdUJBQXVCLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsc0JBQXNCLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxxQkFBcUIsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsdUJBQXVCLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLGFBQWEsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLHlCQUF5QixFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxFQUFDLFlBQVksRUFBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsbUJBQW1CLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxpQkFBaUIsRUFBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLEVBQUMsb0JBQW9CLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxFQUFDLFVBQVUsRUFBQyxFQUFDLHFCQUFxQixFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLEVBQUMsb0JBQW9CLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsRUFBQyxlQUFlLEVBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMscUJBQXFCLEVBQUMsQ0FBQyxFQUFDLHVCQUF1QixFQUFDLENBQUMsRUFBQyxxQkFBcUIsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxVQUFV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QUEsQUE1QkEsQ0FBc0MsUUFBUSxDQUFDLFVBQVUsR0E0QnpEO1FBNUJhLDZCQUFnQixtQkE0QjdCLENBQUE7SUFDSixDQUFDLEVBaENtQixZQUFZLEdBQVosc0JBQVksS0FBWixzQkFBWSxRQWdDL0I7QUFBRCxDQUFDLEVBaENTLFNBQVMsS0FBVCxTQUFTLFFBZ0NsQiIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VGb3JtIHtcclxuICAgICAgICBMYW5ndWFnZUlkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTGFuZ3VhZ2VOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUxhbmd1YWdlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTGFuZ3VhZ2VGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShMYW5ndWFnZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTGFuZ3VhZ2VJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZU5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBJZD86IG51bWJlcjtcclxuICAgICAgICBMYW5ndWFnZUlkPzogc3RyaW5nO1xyXG4gICAgICAgIExhbmd1YWdlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdMYW5ndWFnZU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPExhbmd1YWdlUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxMYW5ndWFnZVJvdz4oJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIExhbmd1YWdlSWQgPSBcIkxhbmd1YWdlSWRcIixcclxuICAgICAgICAgICAgTGFuZ3VhZ2VOYW1lID0gXCJMYW5ndWFnZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTGFuZ3VhZ2VTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxMYW5ndWFnZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PExhbmd1YWdlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pkxhbmd1YWdlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgUGVybWlzc2lvbktleXMge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTZWN1cml0eSA9IFwiQWRtaW5pc3RyYXRpb246U2VjdXJpdHlcIjtcclxuICAgICAgICBleHBvcnQgY29uc3QgVHJhbnNsYXRpb24gPSBcIkFkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uXCI7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlRm9ybSB7XHJcbiAgICAgICAgUm9sZU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJvbGVGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSb2xlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUm9sZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUm9sZU5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgUm9sZUlEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+IHtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBSb2xlUGVybWlzc2lvbklkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBQZXJtaXNzaW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFJvbGVSb2xlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdSb2xlUGVybWlzc2lvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Blcm1pc3Npb25LZXknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25JZCA9IFwiUm9sZVBlcm1pc3Npb25JZFwiLFxyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBQZXJtaXNzaW9uS2V5ID0gXCJQZXJtaXNzaW9uS2V5XCIsXHJcbiAgICAgICAgICAgIFJvbGVSb2xlTmFtZSA9IFwiUm9sZVJvbGVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogUm9sZVBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBSb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlJvbGVQZXJtaXNzaW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgUm9sZUlEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiBzdHJpbmdbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVSb3cge1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1JvbGVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdSb2xlTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFJvbGVSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFJvbGVSb3c+KCdBZG1pbmlzdHJhdGlvbi5Sb2xlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgUm9sZU5hbWUgPSBcIlJvbGVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Sb2xlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJvbGVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSb2xlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFJvbGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8Um9sZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Um9sZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2VyZ2VuQ29ubmVjdGlvbiB7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTZXJnZW5HZW5lcmF0ZU9wdGlvbnMge1xyXG4gICAgICAgIFJvdz86IGJvb2xlYW47XHJcbiAgICAgICAgU2VydmljZT86IGJvb2xlYW47XHJcbiAgICAgICAgVUk/OiBib29sZWFuO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTZXJnZW5HZW5lcmF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgQ29ubmVjdGlvbktleT86IHN0cmluZztcclxuICAgICAgICBUYWJsZT86IFNlcmdlblRhYmxlO1xyXG4gICAgICAgIEdlbmVyYXRlT3B0aW9ucz86IFNlcmdlbkdlbmVyYXRlT3B0aW9ucztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2VyZ2VuTGlzdFRhYmxlc1JlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgQ29ubmVjdGlvbktleT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgU2VyZ2VuU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vU2VyZ2VuJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdENvbm5lY3Rpb25zKHJlcXVlc3Q6IFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxTZXJnZW5Db25uZWN0aW9uPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RUYWJsZXMocmVxdWVzdDogU2VyZ2VuTGlzdFRhYmxlc1JlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFNlcmdlblRhYmxlPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIEdlbmVyYXRlKHJlcXVlc3Q6IFNlcmdlbkdlbmVyYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgTGlzdENvbm5lY3Rpb25zID0gXCJBZG1pbmlzdHJhdGlvbi9TZXJnZW4vTGlzdENvbm5lY3Rpb25zXCIsXHJcbiAgICAgICAgICAgIExpc3RUYWJsZXMgPSBcIkFkbWluaXN0cmF0aW9uL1Nlcmdlbi9MaXN0VGFibGVzXCIsXHJcbiAgICAgICAgICAgIEdlbmVyYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9TZXJnZW4vR2VuZXJhdGVcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnTGlzdENvbm5lY3Rpb25zJywgXHJcbiAgICAgICAgICAgICdMaXN0VGFibGVzJywgXHJcbiAgICAgICAgICAgICdHZW5lcmF0ZSdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlNlcmdlblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2VyZ2VuVGFibGUge1xyXG4gICAgICAgIFRhYmxlbmFtZT86IHN0cmluZztcclxuICAgICAgICBJZGVudGlmaWVyPzogc3RyaW5nO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBQZXJtaXNzaW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvbkl0ZW0ge1xyXG4gICAgICAgIEtleT86IHN0cmluZztcclxuICAgICAgICBTb3VyY2VUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIFRhcmdldFRleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tVGV4dD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVxdWVzdCB7XHJcbiAgICAgICAgU291cmNlTGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgICAgICBUYXJnZXRMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVHJhbnNsYXRpb25TZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9UcmFuc2xhdGlvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVHJhbnNsYXRpb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VHJhbnNsYXRpb25JdGVtPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBUcmFuc2xhdGlvblVwZGF0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL0xpc3RcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9UcmFuc2xhdGlvbi9VcGRhdGVcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnTGlzdCcsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJ1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VHJhbnNsYXRpb25TZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBUYXJnZXRMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgICAgIFRyYW5zbGF0aW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlckZvcm0ge1xyXG4gICAgICAgIFVzZXJuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGlzcGxheU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbWFpbDogU2VyZW5pdHkuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgVXNlckltYWdlOiBTZXJlbml0eS5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmRDb25maXJtOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBTb3VyY2U6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVVzZXJGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBVc2VyRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkVtYWlsRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoVXNlckZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVXNlcm5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGlzcGxheU5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVXNlckltYWdlJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkQ29uZmlybScsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdTb3VyY2UnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgVXNlclBlcm1pc3Npb25JZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVybWlzc2lvbktleT86IHN0cmluZztcclxuICAgICAgICBHcmFudGVkPzogYm9vbGVhbjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBVc2VyPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJQZXJtaXNzaW9uSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUGVybWlzc2lvbktleSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvbklkID0gXCJVc2VyUGVybWlzc2lvbklkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFBlcm1pc3Npb25LZXkgPSBcIlBlcm1pc3Npb25LZXlcIixcclxuICAgICAgICAgICAgR3JhbnRlZCA9IFwiR3JhbnRlZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgVXNlciA9IFwiVXNlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFVzZXJQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFVzZXJQZXJtaXNzaW9uUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RSb2xlUGVybWlzc2lvbnMocmVxdWVzdDogVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RQZXJtaXNzaW9uS2V5cyhyZXF1ZXN0OiBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9MaXN0XCIsXHJcbiAgICAgICAgICAgIExpc3RSb2xlUGVybWlzc2lvbnMgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RSb2xlUGVybWlzc2lvbnNcIixcclxuICAgICAgICAgICAgTGlzdFBlcm1pc3Npb25LZXlzID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9MaXN0UGVybWlzc2lvbktleXNcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdMaXN0Um9sZVBlcm1pc3Npb25zJywgXHJcbiAgICAgICAgICAgICdMaXN0UGVybWlzc2lvbktleXMnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcm1pc3Npb25zPzogVXNlclBlcm1pc3Npb25Sb3dbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVMaXN0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVzcG9uc2U8bnVtYmVyPiB7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZVJvdyB7XHJcbiAgICAgICAgVXNlclJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXI/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm9sZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlclJvbGVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VyUm9sZUlkID0gXCJVc2VyUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFVzZXJuYW1lID0gXCJVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBVc2VyID0gXCJVc2VyXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb2xlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclJvbGVVcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclJvbGVMaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBVc2VyUm9sZUxpc3RSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJSb2xlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZVVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVzPzogbnVtYmVyW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm93IHtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgU291cmNlPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkSGFzaD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZFNhbHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlckltYWdlPzogc3RyaW5nO1xyXG4gICAgICAgIExhc3REaXJlY3RvcnlVcGRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNBY3RpdmU/OiBudW1iZXI7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRDb25maXJtPzogc3RyaW5nO1xyXG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlcklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaXNBY3RpdmVQcm9wZXJ0eSA9ICdJc0FjdGl2ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdVc2VybmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFVzZXJSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFVzZXJSb3c+KCdBZG1pbmlzdHJhdGlvbi5Vc2VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFNvdXJjZSA9IFwiU291cmNlXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkSGFzaCA9IFwiUGFzc3dvcmRIYXNoXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkU2FsdCA9IFwiUGFzc3dvcmRTYWx0XCIsXHJcbiAgICAgICAgICAgIERpc3BsYXlOYW1lID0gXCJEaXNwbGF5TmFtZVwiLFxyXG4gICAgICAgICAgICBFbWFpbCA9IFwiRW1haWxcIixcclxuICAgICAgICAgICAgVXNlckltYWdlID0gXCJVc2VySW1hZ2VcIixcclxuICAgICAgICAgICAgTGFzdERpcmVjdG9yeVVwZGF0ZSA9IFwiTGFzdERpcmVjdG9yeVVwZGF0ZVwiLFxyXG4gICAgICAgICAgICBJc0FjdGl2ZSA9IFwiSXNBY3RpdmVcIixcclxuICAgICAgICAgICAgUGFzc3dvcmQgPSBcIlBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkQ29uZmlybSA9IFwiUGFzc3dvcmRDb25maXJtXCIsXHJcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXHJcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcclxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlcic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxVc2VyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VXNlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVbmRlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5VbmRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuVW5kZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFVzZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9EZWxldGVcIixcclxuICAgICAgICAgICAgVW5kZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVW5kZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1VuZGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BdWxhIHtcclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkF1bGEge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBdWxhRm9ybSB7XHJcbiAgICAgICAgRGVzQXVsYTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIElkZlRpcG9BdGl2aWRhZGU6IFNlcmVuaXR5LkVudW1FZGl0b3I7XHJcbiAgICAgICAgSWRmQXRpdm86IFNlcmVuaXR5LkJvb2xlYW5FZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEF1bGFGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBdWxhLkF1bGEnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUF1bGFGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBBdWxhRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkVudW1FZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkJvb2xlYW5FZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQXVsYUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRGVzQXVsYScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdJZGZUaXBvQXRpdmlkYWRlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0lkZkF0aXZvJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQXVsYSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEF1bGFSb3cge1xyXG4gICAgICAgIENvZEF1bGE/OiBudW1iZXI7XHJcbiAgICAgICAgRGVzQXVsYT86IHN0cmluZztcclxuICAgICAgICBJZGZUaXBvQXRpdmlkYWRlPzogbnVtYmVyO1xyXG4gICAgICAgIElkZkF0aXZvPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEF1bGFSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0NvZEF1bGEnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnRGVzQXVsYSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBdWxhLkF1bGEnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQXVsYS5BdWxhJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxBdWxhUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxBdWxhUm93PignQXVsYS5BdWxhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0F1bGE6R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQXVsYTpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQXVsYTpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBdWxhOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIENvZEF1bGEgPSBcIkNvZEF1bGFcIixcclxuICAgICAgICAgICAgRGVzQXVsYSA9IFwiRGVzQXVsYVwiLFxyXG4gICAgICAgICAgICBJZGZUaXBvQXRpdmlkYWRlID0gXCJJZGZUaXBvQXRpdmlkYWRlXCIsXHJcbiAgICAgICAgICAgIElkZkF0aXZvID0gXCJJZGZBdGl2b1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQXVsYSB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEF1bGFTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBdWxhL0F1bGEnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QXVsYVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEF1bGFSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8QXVsYVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxBdWxhUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkF1bGEvQXVsYS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBdWxhL0F1bGEvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQXVsYS9BdWxhL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQXVsYS9BdWxhL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkF1bGEvQXVsYS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+QXVsYVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkF1bGEge1xyXG4gICAgZXhwb3J0IGVudW0gQXVsYVRpcG8ge1xyXG4gICAgICAgIEdydXBvID0gMCxcclxuICAgICAgICBJbmRpdmlkdWFsID0gMVxyXG4gICAgfVxyXG4gICAgU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVudW1UeXBlKEF1bGFUaXBvLCAnR3ltQWN0aW9uLkF1bGEuQXVsYVRpcG8nLCAnQXVsYS5BdWxhVGlwbycpO1xyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQXVsYUluc3RydXRvciB7XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BdWxhSW5zdHJ1dG9yIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXVsYUluc3RydXRvckZvcm0ge1xyXG4gICAgICAgIENvZEF1bGE6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBDb2RJbnN0cnV0b3I6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBIb3JJbmljaW86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBIb3JGaW06IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBJZGZTZWd1bmRhOiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xyXG4gICAgICAgIElkZlRlcmNhOiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xyXG4gICAgICAgIElkZlF1YXJ0YTogU2VyZW5pdHkuQm9vbGVhbkVkaXRvcjtcclxuICAgICAgICBJZGZRdWludGE6IFNlcmVuaXR5LkJvb2xlYW5FZGl0b3I7XHJcbiAgICAgICAgSWRmU2V4dGE6IFNlcmVuaXR5LkJvb2xlYW5FZGl0b3I7XHJcbiAgICAgICAgSWRmU2FiYWRvOiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xyXG4gICAgICAgIElkZkRvbWluZ286IFNlcmVuaXR5LkJvb2xlYW5FZGl0b3I7XHJcbiAgICAgICAgRGVzU2FsYTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBBdWxhSW5zdHJ1dG9yRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQXVsYUluc3RydXRvci5BdWxhSW5zdHJ1dG9yJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFBdWxhSW5zdHJ1dG9yRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQXVsYUluc3RydXRvckZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkJvb2xlYW5FZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQXVsYUluc3RydXRvckZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnQ29kQXVsYScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb2RJbnN0cnV0b3InLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnSG9ySW5pY2lvJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hvckZpbScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdJZGZTZWd1bmRhJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0lkZlRlcmNhJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0lkZlF1YXJ0YScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdJZGZRdWludGEnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnSWRmU2V4dGEnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnSWRmU2FiYWRvJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0lkZkRvbWluZ28nLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnRGVzU2FsYScsIHcxXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkF1bGFJbnN0cnV0b3Ige1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBdWxhSW5zdHJ1dG9yUm93IHtcclxuICAgICAgICBDb2RSZWdpc3Rybz86IG51bWJlcjtcclxuICAgICAgICBDb2RBdWxhPzogbnVtYmVyO1xyXG4gICAgICAgIENvZEluc3RydXRvcj86IG51bWJlcjtcclxuICAgICAgICBIb3JJbmljaW8/OiBzdHJpbmc7XHJcbiAgICAgICAgSG9yRmltPzogc3RyaW5nO1xyXG4gICAgICAgIElkZlNlZ3VuZGE/OiBib29sZWFuO1xyXG4gICAgICAgIElkZlRlcmNhPzogYm9vbGVhbjtcclxuICAgICAgICBJZGZRdWFydGE/OiBib29sZWFuO1xyXG4gICAgICAgIElkZlF1aW50YT86IGJvb2xlYW47XHJcbiAgICAgICAgSWRmU2V4dGE/OiBib29sZWFuO1xyXG4gICAgICAgIElkZlNhYmFkbz86IGJvb2xlYW47XHJcbiAgICAgICAgSWRmRG9taW5nbz86IGJvb2xlYW47XHJcbiAgICAgICAgRGVzU2FsYT86IHN0cmluZztcclxuICAgICAgICBDb2RBdWxhRGVzQXVsYT86IHN0cmluZztcclxuICAgICAgICBDb2RBdWxhSWRmVGlwb0F0aXZpZGFkZT86IGJvb2xlYW47XHJcbiAgICAgICAgQ29kQXVsYUlkZkF0aXZvPzogYm9vbGVhbjtcclxuICAgICAgICBDb2RJbnN0cnV0b3JEZXNOb21lPzogc3RyaW5nO1xyXG4gICAgICAgIENvZEluc3RydXRvckRlc1JnPzogc3RyaW5nO1xyXG4gICAgICAgIENvZEluc3RydXRvckRlc0NwZj86IHN0cmluZztcclxuICAgICAgICBDb2RJbnN0cnV0b3JJZGZUaXBvQXRpdmlkYWRlPzogYm9vbGVhbjtcclxuICAgICAgICBDb2RJbnN0cnV0b3JJZGZBdGl2bz86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBdWxhSW5zdHJ1dG9yUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdDb2RSZWdpc3Rybyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBdWxhSW5zdHJ1dG9yLkF1bGFJbnN0cnV0b3InO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0F1bGFJbnN0cnV0b3I6R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQXVsYUluc3RydXRvcjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQXVsYUluc3RydXRvcjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBdWxhSW5zdHJ1dG9yOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIENvZFJlZ2lzdHJvID0gXCJDb2RSZWdpc3Ryb1wiLFxyXG4gICAgICAgICAgICBDb2RBdWxhID0gXCJDb2RBdWxhXCIsXHJcbiAgICAgICAgICAgIENvZEluc3RydXRvciA9IFwiQ29kSW5zdHJ1dG9yXCIsXHJcbiAgICAgICAgICAgIEhvckluaWNpbyA9IFwiSG9ySW5pY2lvXCIsXHJcbiAgICAgICAgICAgIEhvckZpbSA9IFwiSG9yRmltXCIsXHJcbiAgICAgICAgICAgIElkZlNlZ3VuZGEgPSBcIklkZlNlZ3VuZGFcIixcclxuICAgICAgICAgICAgSWRmVGVyY2EgPSBcIklkZlRlcmNhXCIsXHJcbiAgICAgICAgICAgIElkZlF1YXJ0YSA9IFwiSWRmUXVhcnRhXCIsXHJcbiAgICAgICAgICAgIElkZlF1aW50YSA9IFwiSWRmUXVpbnRhXCIsXHJcbiAgICAgICAgICAgIElkZlNleHRhID0gXCJJZGZTZXh0YVwiLFxyXG4gICAgICAgICAgICBJZGZTYWJhZG8gPSBcIklkZlNhYmFkb1wiLFxyXG4gICAgICAgICAgICBJZGZEb21pbmdvID0gXCJJZGZEb21pbmdvXCIsXHJcbiAgICAgICAgICAgIERlc1NhbGEgPSBcIkRlc1NhbGFcIixcclxuICAgICAgICAgICAgQ29kQXVsYURlc0F1bGEgPSBcIkNvZEF1bGFEZXNBdWxhXCIsXHJcbiAgICAgICAgICAgIENvZEF1bGFJZGZUaXBvQXRpdmlkYWRlID0gXCJDb2RBdWxhSWRmVGlwb0F0aXZpZGFkZVwiLFxyXG4gICAgICAgICAgICBDb2RBdWxhSWRmQXRpdm8gPSBcIkNvZEF1bGFJZGZBdGl2b1wiLFxyXG4gICAgICAgICAgICBDb2RJbnN0cnV0b3JEZXNOb21lID0gXCJDb2RJbnN0cnV0b3JEZXNOb21lXCIsXHJcbiAgICAgICAgICAgIENvZEluc3RydXRvckRlc1JnID0gXCJDb2RJbnN0cnV0b3JEZXNSZ1wiLFxyXG4gICAgICAgICAgICBDb2RJbnN0cnV0b3JEZXNDcGYgPSBcIkNvZEluc3RydXRvckRlc0NwZlwiLFxyXG4gICAgICAgICAgICBDb2RJbnN0cnV0b3JJZGZUaXBvQXRpdmlkYWRlID0gXCJDb2RJbnN0cnV0b3JJZGZUaXBvQXRpdmlkYWRlXCIsXHJcbiAgICAgICAgICAgIENvZEluc3RydXRvcklkZkF0aXZvID0gXCJDb2RJbnN0cnV0b3JJZGZBdGl2b1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQXVsYUluc3RydXRvciB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEF1bGFJbnN0cnV0b3JTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBdWxhSW5zdHJ1dG9yL0F1bGFJbnN0cnV0b3InO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QXVsYUluc3RydXRvclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEF1bGFJbnN0cnV0b3JSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8QXVsYUluc3RydXRvclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxBdWxhSW5zdHJ1dG9yUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkF1bGFJbnN0cnV0b3IvQXVsYUluc3RydXRvci9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBdWxhSW5zdHJ1dG9yL0F1bGFJbnN0cnV0b3IvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQXVsYUluc3RydXRvci9BdWxhSW5zdHJ1dG9yL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQXVsYUluc3RydXRvci9BdWxhSW5zdHJ1dG9yL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkF1bGFJbnN0cnV0b3IvQXVsYUluc3RydXRvci9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+QXVsYUluc3RydXRvclNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkF2YWxpYWNhb0Zpc2ljYSB7XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BdmFsaWFjYW9GaXNpY2Ege1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBdmFsaWFjYW9GaXNpY2FGb3JtIHtcclxuICAgICAgICBDb2RDbGllbnRlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgQ29kRmlzaW90ZXJhcGV1dGE6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBEZXNBbmFtbmVzZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERlc0V4YW1lRG9icmFzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGVzRXhhbWVFcmdvbWV0cmljbzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERhdEF2YWxpYWNhbzogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQXZhbGlhY2FvRmlzaWNhRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQXZhbGlhY2FvRmlzaWNhLkF2YWxpYWNhb0Zpc2ljYSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQXZhbGlhY2FvRmlzaWNhRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQXZhbGlhY2FvRmlzaWNhRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuRGF0ZUVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShBdmFsaWFjYW9GaXNpY2FGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvZENsaWVudGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29kRmlzaW90ZXJhcGV1dGEnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGVzQW5hbW5lc2UnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnRGVzRXhhbWVEb2JyYXMnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnRGVzRXhhbWVFcmdvbWV0cmljbycsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdEYXRBdmFsaWFjYW8nLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BdmFsaWFjYW9GaXNpY2Ege1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBdmFsaWFjYW9GaXNpY2FSb3cge1xyXG4gICAgICAgIENvZEF2YWxpYWNhb0Zpc2ljYT86IG51bWJlcjtcclxuICAgICAgICBDb2RDbGllbnRlPzogbnVtYmVyO1xyXG4gICAgICAgIENvZEZpc2lvdGVyYXBldXRhPzogbnVtYmVyO1xyXG4gICAgICAgIERlc0FuYW1uZXNlPzogc3RyaW5nO1xyXG4gICAgICAgIERlc0V4YW1lRG9icmFzPzogc3RyaW5nO1xyXG4gICAgICAgIERlc0V4YW1lRXJnb21ldHJpY28/OiBzdHJpbmc7XHJcbiAgICAgICAgRGF0QXZhbGlhY2FvPzogc3RyaW5nO1xyXG4gICAgICAgIENvZENsaWVudGVDb2RCaW9tZXRyaWE/OiBudW1iZXI7XHJcbiAgICAgICAgQ29kQ2xpZW50ZURlc05vbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29kQ2xpZW50ZURlc1JnPzogc3RyaW5nO1xyXG4gICAgICAgIENvZENsaWVudGVEZXNDcGY/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29kQ2xpZW50ZUlkZkFkaW1wbGVudGU/OiBib29sZWFuO1xyXG4gICAgICAgIENvZENsaWVudGVJZGZBdGl2bz86IGJvb2xlYW47XHJcbiAgICAgICAgQ29kQ2xpZW50ZURlc0VuZGVyZWNvPzogc3RyaW5nO1xyXG4gICAgICAgIENvZEZpc2lvdGVyYXBldXRhRGVzTm9tZT86IHN0cmluZztcclxuICAgICAgICBDb2RGaXNpb3RlcmFwZXV0YUlkZkF0aXZvPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEF2YWxpYWNhb0Zpc2ljYVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnQ29kQXZhbGlhY2FvRmlzaWNhJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0Rlc0FuYW1uZXNlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0F2YWxpYWNhb0Zpc2ljYS5BdmFsaWFjYW9GaXNpY2EnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0F2YWxpYWNhb0Zpc2ljYTpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBdmFsaWFjYW9GaXNpY2E6R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0F2YWxpYWNhb0Zpc2ljYTpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBdmFsaWFjYW9GaXNpY2E6R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgQ29kQXZhbGlhY2FvRmlzaWNhID0gXCJDb2RBdmFsaWFjYW9GaXNpY2FcIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZSA9IFwiQ29kQ2xpZW50ZVwiLFxyXG4gICAgICAgICAgICBDb2RGaXNpb3RlcmFwZXV0YSA9IFwiQ29kRmlzaW90ZXJhcGV1dGFcIixcclxuICAgICAgICAgICAgRGVzQW5hbW5lc2UgPSBcIkRlc0FuYW1uZXNlXCIsXHJcbiAgICAgICAgICAgIERlc0V4YW1lRG9icmFzID0gXCJEZXNFeGFtZURvYnJhc1wiLFxyXG4gICAgICAgICAgICBEZXNFeGFtZUVyZ29tZXRyaWNvID0gXCJEZXNFeGFtZUVyZ29tZXRyaWNvXCIsXHJcbiAgICAgICAgICAgIERhdEF2YWxpYWNhbyA9IFwiRGF0QXZhbGlhY2FvXCIsXHJcbiAgICAgICAgICAgIENvZENsaWVudGVDb2RCaW9tZXRyaWEgPSBcIkNvZENsaWVudGVDb2RCaW9tZXRyaWFcIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZURlc05vbWUgPSBcIkNvZENsaWVudGVEZXNOb21lXCIsXHJcbiAgICAgICAgICAgIENvZENsaWVudGVEZXNSZyA9IFwiQ29kQ2xpZW50ZURlc1JnXCIsXHJcbiAgICAgICAgICAgIENvZENsaWVudGVEZXNDcGYgPSBcIkNvZENsaWVudGVEZXNDcGZcIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZUlkZkFkaW1wbGVudGUgPSBcIkNvZENsaWVudGVJZGZBZGltcGxlbnRlXCIsXHJcbiAgICAgICAgICAgIENvZENsaWVudGVJZGZBdGl2byA9IFwiQ29kQ2xpZW50ZUlkZkF0aXZvXCIsXHJcbiAgICAgICAgICAgIENvZENsaWVudGVEZXNFbmRlcmVjbyA9IFwiQ29kQ2xpZW50ZURlc0VuZGVyZWNvXCIsXHJcbiAgICAgICAgICAgIENvZEZpc2lvdGVyYXBldXRhRGVzTm9tZSA9IFwiQ29kRmlzaW90ZXJhcGV1dGFEZXNOb21lXCIsXHJcbiAgICAgICAgICAgIENvZEZpc2lvdGVyYXBldXRhSWRmQXRpdm8gPSBcIkNvZEZpc2lvdGVyYXBldXRhSWRmQXRpdm9cIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkF2YWxpYWNhb0Zpc2ljYSB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEF2YWxpYWNhb0Zpc2ljYVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0F2YWxpYWNhb0Zpc2ljYS9BdmFsaWFjYW9GaXNpY2EnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QXZhbGlhY2FvRmlzaWNhUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QXZhbGlhY2FvRmlzaWNhUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEF2YWxpYWNhb0Zpc2ljYVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxBdmFsaWFjYW9GaXNpY2FSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQXZhbGlhY2FvRmlzaWNhL0F2YWxpYWNhb0Zpc2ljYS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBdmFsaWFjYW9GaXNpY2EvQXZhbGlhY2FvRmlzaWNhL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkF2YWxpYWNhb0Zpc2ljYS9BdmFsaWFjYW9GaXNpY2EvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBdmFsaWFjYW9GaXNpY2EvQXZhbGlhY2FvRmlzaWNhL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkF2YWxpYWNhb0Zpc2ljYS9BdmFsaWFjYW9GaXNpY2EvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PkF2YWxpYWNhb0Zpc2ljYVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkNsaWVudGUge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQ2xpZW50ZSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENsaWVudGVGb3JtIHtcclxuICAgICAgICBDb2RCaW9tZXRyaWE6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgRGVzTm9tZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERlc1JnOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGVzQ3BmOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgSWRmQWRpbXBsZW50ZTogU2VyZW5pdHkuQm9vbGVhbkVkaXRvcjtcclxuICAgICAgICBJZGZBdGl2bzogU2VyZW5pdHkuQm9vbGVhbkVkaXRvcjtcclxuICAgICAgICBEZXNFbmRlcmVjbzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDbGllbnRlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQ2xpZW50ZS5DbGllbnRlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFDbGllbnRlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ2xpZW50ZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5Cb29sZWFuRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENsaWVudGVGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvZEJpb21ldHJpYScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEZXNOb21lJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc1JnJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc0NwZicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdJZGZBZGltcGxlbnRlJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0lkZkF0aXZvJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc0VuZGVyZWNvJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQ2xpZW50ZSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENsaWVudGVSb3cge1xyXG4gICAgICAgIENvZENsaWVudGU/OiBudW1iZXI7XHJcbiAgICAgICAgQ29kQmlvbWV0cmlhPzogbnVtYmVyO1xyXG4gICAgICAgIERlc05vbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGVzUmc/OiBzdHJpbmc7XHJcbiAgICAgICAgRGVzQ3BmPzogc3RyaW5nO1xyXG4gICAgICAgIElkZkFkaW1wbGVudGU/OiBib29sZWFuO1xyXG4gICAgICAgIElkZkF0aXZvPzogYm9vbGVhbjtcclxuICAgICAgICBEZXNFbmRlcmVjbz86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENsaWVudGVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0NvZENsaWVudGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnRGVzTm9tZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdDbGllbnRlLkNsaWVudGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQ2xpZW50ZS5DbGllbnRlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxDbGllbnRlUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxDbGllbnRlUm93PignQ2xpZW50ZS5DbGllbnRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0NsaWVudGU6R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQ2xpZW50ZTpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQ2xpZW50ZTpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdDbGllbnRlOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIENvZENsaWVudGUgPSBcIkNvZENsaWVudGVcIixcclxuICAgICAgICAgICAgQ29kQmlvbWV0cmlhID0gXCJDb2RCaW9tZXRyaWFcIixcclxuICAgICAgICAgICAgRGVzTm9tZSA9IFwiRGVzTm9tZVwiLFxyXG4gICAgICAgICAgICBEZXNSZyA9IFwiRGVzUmdcIixcclxuICAgICAgICAgICAgRGVzQ3BmID0gXCJEZXNDcGZcIixcclxuICAgICAgICAgICAgSWRmQWRpbXBsZW50ZSA9IFwiSWRmQWRpbXBsZW50ZVwiLFxyXG4gICAgICAgICAgICBJZGZBdGl2byA9IFwiSWRmQXRpdm9cIixcclxuICAgICAgICAgICAgRGVzRW5kZXJlY28gPSBcIkRlc0VuZGVyZWNvXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5DbGllbnRlIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ2xpZW50ZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0NsaWVudGUvQ2xpZW50ZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDbGllbnRlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q2xpZW50ZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxDbGllbnRlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPENsaWVudGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQ2xpZW50ZS9DbGllbnRlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkNsaWVudGUvQ2xpZW50ZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJDbGllbnRlL0NsaWVudGUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJDbGllbnRlL0NsaWVudGUvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQ2xpZW50ZS9DbGllbnRlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5DbGllbnRlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQ2xpZW50ZVBsYW5vQXVsYSB7XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5DbGllbnRlUGxhbm9BdWxhIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2xpZW50ZVBsYW5vQXVsYUZvcm0ge1xyXG4gICAgICAgIFBsYW5vOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgQXVsYTogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIENsaWVudGU6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2xpZW50ZVBsYW5vQXVsYUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0NsaWVudGVQbGFub0F1bGEuQ2xpZW50ZVBsYW5vQXVsYSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ2xpZW50ZVBsYW5vQXVsYUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIENsaWVudGVQbGFub0F1bGFGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkxvb2t1cEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShDbGllbnRlUGxhbm9BdWxhRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdQbGFubycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBdWxhJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NsaWVudGUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5DbGllbnRlUGxhbm9BdWxhIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2xpZW50ZVBsYW5vQXVsYVJvdyB7XHJcbiAgICAgICAgQ29kUmVnaXN0cm8/OiBudW1iZXI7XHJcbiAgICAgICAgUGxhbm8/OiBudW1iZXI7XHJcbiAgICAgICAgQXVsYT86IG51bWJlcjtcclxuICAgICAgICBDbGllbnRlPzogbnVtYmVyO1xyXG4gICAgICAgIFBsYW5vRGVzTm9tZT86IHN0cmluZztcclxuICAgICAgICBQbGFub0lkZlRpcG8/OiBzdHJpbmc7XHJcbiAgICAgICAgUGxhbm9JZGZBaXZvPzogYm9vbGVhbjtcclxuICAgICAgICBBdWxhRGVzQXVsYT86IHN0cmluZztcclxuICAgICAgICBBdWxhSWRmVGlwb0F0aXZpZGFkZT86IGJvb2xlYW47XHJcbiAgICAgICAgQXVsYUlkZkF0aXZvPzogYm9vbGVhbjtcclxuICAgICAgICBDbGllbnRlQ29kQmlvbWV0cmlhPzogbnVtYmVyO1xyXG4gICAgICAgIENsaWVudGVEZXNOb21lPzogc3RyaW5nO1xyXG4gICAgICAgIENsaWVudGVEZXNSZz86IHN0cmluZztcclxuICAgICAgICBDbGllbnRlRGVzQ3BmPzogc3RyaW5nO1xyXG4gICAgICAgIENsaWVudGVJZGZBZGltcGxlbnRlPzogYm9vbGVhbjtcclxuICAgICAgICBDbGllbnRlSWRmQXRpdm8/OiBib29sZWFuO1xyXG4gICAgICAgIENsaWVudGVEZXNFbmRlcmVjbz86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENsaWVudGVQbGFub0F1bGFSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0NvZFJlZ2lzdHJvJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0NsaWVudGVQbGFub0F1bGEuQ2xpZW50ZVBsYW5vQXVsYSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQ2xpZW50ZVBsYW5vQXVsYTpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdDbGllbnRlUGxhbm9BdWxhOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdDbGllbnRlUGxhbm9BdWxhOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0NsaWVudGVQbGFub0F1bGE6R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgQ29kUmVnaXN0cm8gPSBcIkNvZFJlZ2lzdHJvXCIsXHJcbiAgICAgICAgICAgIFBsYW5vID0gXCJQbGFub1wiLFxyXG4gICAgICAgICAgICBBdWxhID0gXCJBdWxhXCIsXHJcbiAgICAgICAgICAgIENsaWVudGUgPSBcIkNsaWVudGVcIixcclxuICAgICAgICAgICAgUGxhbm9EZXNOb21lID0gXCJQbGFub0Rlc05vbWVcIixcclxuICAgICAgICAgICAgUGxhbm9JZGZUaXBvID0gXCJQbGFub0lkZlRpcG9cIixcclxuICAgICAgICAgICAgUGxhbm9JZGZBaXZvID0gXCJQbGFub0lkZkFpdm9cIixcclxuICAgICAgICAgICAgQXVsYURlc0F1bGEgPSBcIkF1bGFEZXNBdWxhXCIsXHJcbiAgICAgICAgICAgIEF1bGFJZGZUaXBvQXRpdmlkYWRlID0gXCJBdWxhSWRmVGlwb0F0aXZpZGFkZVwiLFxyXG4gICAgICAgICAgICBBdWxhSWRmQXRpdm8gPSBcIkF1bGFJZGZBdGl2b1wiLFxyXG4gICAgICAgICAgICBDbGllbnRlQ29kQmlvbWV0cmlhID0gXCJDbGllbnRlQ29kQmlvbWV0cmlhXCIsXHJcbiAgICAgICAgICAgIENsaWVudGVEZXNOb21lID0gXCJDbGllbnRlRGVzTm9tZVwiLFxyXG4gICAgICAgICAgICBDbGllbnRlRGVzUmcgPSBcIkNsaWVudGVEZXNSZ1wiLFxyXG4gICAgICAgICAgICBDbGllbnRlRGVzQ3BmID0gXCJDbGllbnRlRGVzQ3BmXCIsXHJcbiAgICAgICAgICAgIENsaWVudGVJZGZBZGltcGxlbnRlID0gXCJDbGllbnRlSWRmQWRpbXBsZW50ZVwiLFxyXG4gICAgICAgICAgICBDbGllbnRlSWRmQXRpdm8gPSBcIkNsaWVudGVJZGZBdGl2b1wiLFxyXG4gICAgICAgICAgICBDbGllbnRlRGVzRW5kZXJlY28gPSBcIkNsaWVudGVEZXNFbmRlcmVjb1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQ2xpZW50ZVBsYW5vQXVsYSB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENsaWVudGVQbGFub0F1bGFTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdDbGllbnRlUGxhbm9BdWxhL0NsaWVudGVQbGFub0F1bGEnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q2xpZW50ZVBsYW5vQXVsYVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PENsaWVudGVQbGFub0F1bGFSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Q2xpZW50ZVBsYW5vQXVsYVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxDbGllbnRlUGxhbm9BdWxhUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkNsaWVudGVQbGFub0F1bGEvQ2xpZW50ZVBsYW5vQXVsYS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJDbGllbnRlUGxhbm9BdWxhL0NsaWVudGVQbGFub0F1bGEvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQ2xpZW50ZVBsYW5vQXVsYS9DbGllbnRlUGxhbm9BdWxhL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQ2xpZW50ZVBsYW5vQXVsYS9DbGllbnRlUGxhbm9BdWxhL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkNsaWVudGVQbGFub0F1bGEvQ2xpZW50ZVBsYW5vQXVsYS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Q2xpZW50ZVBsYW5vQXVsYVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQcmVmZXJlbmNlUmV0cmlldmVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFByZWZlcmVuY2VUeXBlPzogc3RyaW5nO1xyXG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQ29tbW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclByZWZlcmVuY2VSZXRyaWV2ZVJlc3BvbnNlIGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlc3BvbnNlIHtcclxuICAgICAgICBWYWx1ZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUHJlZmVyZW5jZVJvdyB7XHJcbiAgICAgICAgVXNlclByZWZlcmVuY2VJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUHJlZmVyZW5jZVR5cGU/OiBzdHJpbmc7XHJcbiAgICAgICAgTmFtZT86IHN0cmluZztcclxuICAgICAgICBWYWx1ZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQcmVmZXJlbmNlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VyUHJlZmVyZW5jZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ05hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQ29tbW9uLlVzZXJQcmVmZXJlbmNlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VyUHJlZmVyZW5jZUlkID0gXCJVc2VyUHJlZmVyZW5jZUlkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFByZWZlcmVuY2VUeXBlID0gXCJQcmVmZXJlbmNlVHlwZVwiLFxyXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCIsXHJcbiAgICAgICAgICAgIFZhbHVlID0gXCJWYWx1ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQ29tbW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclByZWZlcmVuY2VTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdDb21tb24vVXNlclByZWZlcmVuY2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclByZWZlcmVuY2VVcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFVzZXJQcmVmZXJlbmNlUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFVzZXJQcmVmZXJlbmNlUmV0cmlldmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkNvbW1vbi9Vc2VyUHJlZmVyZW5jZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkNvbW1vbi9Vc2VyUHJlZmVyZW5jZS9SZXRyaWV2ZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJ1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VXNlclByZWZlcmVuY2VTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUHJlZmVyZW5jZVVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgUHJlZmVyZW5jZVR5cGU/OiBzdHJpbmc7XHJcbiAgICAgICAgTmFtZT86IHN0cmluZztcclxuICAgICAgICBWYWx1ZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEV4Y2VsSW1wb3J0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBGaWxlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEV4Y2VsSW1wb3J0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2Uge1xyXG4gICAgICAgIEluc2VydGVkPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZWQ/OiBudW1iZXI7XHJcbiAgICAgICAgRXJyb3JMaXN0Pzogc3RyaW5nW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uRmVyaWFzIHtcclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkZlcmlhcyB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEZlcmlhc0Zvcm0ge1xyXG4gICAgICAgIENvZFBsYW5vOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgQ29kQXVsYTogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIENvZENsaWVudGU6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBEYXRJbmljaW86IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgRGF0RmltOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBGZXJpYXNGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdGZXJpYXMuRmVyaWFzJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFGZXJpYXNGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBGZXJpYXNGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkxvb2t1cEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGF0ZUVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShGZXJpYXNGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvZFBsYW5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvZEF1bGEnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29kQ2xpZW50ZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEYXRJbmljaW8nLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnRGF0RmltJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uRmVyaWFzIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRmVyaWFzUm93IHtcclxuICAgICAgICBDb2RGZXJpYXM/OiBudW1iZXI7XHJcbiAgICAgICAgQ29kUGxhbm8/OiBudW1iZXI7XHJcbiAgICAgICAgQ29kQXVsYT86IG51bWJlcjtcclxuICAgICAgICBDb2RDbGllbnRlPzogbnVtYmVyO1xyXG4gICAgICAgIERhdEluaWNpbz86IHN0cmluZztcclxuICAgICAgICBEYXRGaW0/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29kUGxhbm9EZXNOb21lPzogc3RyaW5nO1xyXG4gICAgICAgIENvZFBsYW5vSWRmVGlwbz86IHN0cmluZztcclxuICAgICAgICBDb2RQbGFub0lkZkFpdm8/OiBib29sZWFuO1xyXG4gICAgICAgIENvZEF1bGFEZXNBdWxhPzogc3RyaW5nO1xyXG4gICAgICAgIENvZEF1bGFJZGZUaXBvQXRpdmlkYWRlPzogYm9vbGVhbjtcclxuICAgICAgICBDb2RBdWxhSWRmQXRpdm8/OiBib29sZWFuO1xyXG4gICAgICAgIENvZENsaWVudGVDb2RCaW9tZXRyaWE/OiBudW1iZXI7XHJcbiAgICAgICAgQ29kQ2xpZW50ZURlc05vbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29kQ2xpZW50ZURlc1JnPzogc3RyaW5nO1xyXG4gICAgICAgIENvZENsaWVudGVEZXNDcGY/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29kQ2xpZW50ZUlkZkFkaW1wbGVudGU/OiBib29sZWFuO1xyXG4gICAgICAgIENvZENsaWVudGVJZGZBdGl2bz86IGJvb2xlYW47XHJcbiAgICAgICAgQ29kQ2xpZW50ZURlc0VuZGVyZWNvPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRmVyaWFzUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdDb2RGZXJpYXMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnRmVyaWFzLkZlcmlhcyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnRmVyaWFzOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0ZlcmlhczpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnRmVyaWFzOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0ZlcmlhczpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBDb2RGZXJpYXMgPSBcIkNvZEZlcmlhc1wiLFxyXG4gICAgICAgICAgICBDb2RQbGFubyA9IFwiQ29kUGxhbm9cIixcclxuICAgICAgICAgICAgQ29kQXVsYSA9IFwiQ29kQXVsYVwiLFxyXG4gICAgICAgICAgICBDb2RDbGllbnRlID0gXCJDb2RDbGllbnRlXCIsXHJcbiAgICAgICAgICAgIERhdEluaWNpbyA9IFwiRGF0SW5pY2lvXCIsXHJcbiAgICAgICAgICAgIERhdEZpbSA9IFwiRGF0RmltXCIsXHJcbiAgICAgICAgICAgIENvZFBsYW5vRGVzTm9tZSA9IFwiQ29kUGxhbm9EZXNOb21lXCIsXHJcbiAgICAgICAgICAgIENvZFBsYW5vSWRmVGlwbyA9IFwiQ29kUGxhbm9JZGZUaXBvXCIsXHJcbiAgICAgICAgICAgIENvZFBsYW5vSWRmQWl2byA9IFwiQ29kUGxhbm9JZGZBaXZvXCIsXHJcbiAgICAgICAgICAgIENvZEF1bGFEZXNBdWxhID0gXCJDb2RBdWxhRGVzQXVsYVwiLFxyXG4gICAgICAgICAgICBDb2RBdWxhSWRmVGlwb0F0aXZpZGFkZSA9IFwiQ29kQXVsYUlkZlRpcG9BdGl2aWRhZGVcIixcclxuICAgICAgICAgICAgQ29kQXVsYUlkZkF0aXZvID0gXCJDb2RBdWxhSWRmQXRpdm9cIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZUNvZEJpb21ldHJpYSA9IFwiQ29kQ2xpZW50ZUNvZEJpb21ldHJpYVwiLFxyXG4gICAgICAgICAgICBDb2RDbGllbnRlRGVzTm9tZSA9IFwiQ29kQ2xpZW50ZURlc05vbWVcIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZURlc1JnID0gXCJDb2RDbGllbnRlRGVzUmdcIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZURlc0NwZiA9IFwiQ29kQ2xpZW50ZURlc0NwZlwiLFxyXG4gICAgICAgICAgICBDb2RDbGllbnRlSWRmQWRpbXBsZW50ZSA9IFwiQ29kQ2xpZW50ZUlkZkFkaW1wbGVudGVcIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZUlkZkF0aXZvID0gXCJDb2RDbGllbnRlSWRmQXRpdm9cIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZURlc0VuZGVyZWNvID0gXCJDb2RDbGllbnRlRGVzRW5kZXJlY29cIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkZlcmlhcyB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEZlcmlhc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0Zlcmlhcy9GZXJpYXMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8RmVyaWFzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8RmVyaWFzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEZlcmlhc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxGZXJpYXNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRmVyaWFzL0Zlcmlhcy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJGZXJpYXMvRmVyaWFzL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkZlcmlhcy9GZXJpYXMvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJGZXJpYXMvRmVyaWFzL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkZlcmlhcy9GZXJpYXMvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PkZlcmlhc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkZpc2lvdGVyYXBldXRhIHtcclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkZpc2lvdGVyYXBldXRhIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRmlzaW90ZXJhcGV1dGFGb3JtIHtcclxuICAgICAgICBEZXNOb21lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgSWRmQXRpdm86IFNlcmVuaXR5LkJvb2xlYW5FZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEZpc2lvdGVyYXBldXRhRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRmlzaW90ZXJhcGV1dGEuRmlzaW90ZXJhcGV1dGEnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUZpc2lvdGVyYXBldXRhRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgRmlzaW90ZXJhcGV1dGFGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuQm9vbGVhbkVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShGaXNpb3RlcmFwZXV0YUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRGVzTm9tZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdJZGZBdGl2bycsIHcxXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkZpc2lvdGVyYXBldXRhIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRmlzaW90ZXJhcGV1dGFSb3cge1xyXG4gICAgICAgIENvZEZpc2lvdGVyYXBldXRhPzogbnVtYmVyO1xyXG4gICAgICAgIERlc05vbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgSWRmQXRpdm8/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRmlzaW90ZXJhcGV1dGFSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0NvZEZpc2lvdGVyYXBldXRhJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0Rlc05vbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnRmlzaW90ZXJhcGV1dGEuRmlzaW90ZXJhcGV1dGEnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnRmlzaW90ZXJhcGV1dGEuRmlzaW90ZXJhcGV1dGEnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPEZpc2lvdGVyYXBldXRhUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxGaXNpb3RlcmFwZXV0YVJvdz4oJ0Zpc2lvdGVyYXBldXRhLkZpc2lvdGVyYXBldXRhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0Zpc2lvdGVyYXBldXRhOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0Zpc2lvdGVyYXBldXRhOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdGaXNpb3RlcmFwZXV0YTpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdGaXNpb3RlcmFwZXV0YTpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBDb2RGaXNpb3RlcmFwZXV0YSA9IFwiQ29kRmlzaW90ZXJhcGV1dGFcIixcclxuICAgICAgICAgICAgRGVzTm9tZSA9IFwiRGVzTm9tZVwiLFxyXG4gICAgICAgICAgICBJZGZBdGl2byA9IFwiSWRmQXRpdm9cIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkZpc2lvdGVyYXBldXRhIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRmlzaW90ZXJhcGV1dGFTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdGaXNpb3RlcmFwZXV0YS9GaXNpb3RlcmFwZXV0YSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxGaXNpb3RlcmFwZXV0YVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEZpc2lvdGVyYXBldXRhUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEZpc2lvdGVyYXBldXRhUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEZpc2lvdGVyYXBldXRhUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkZpc2lvdGVyYXBldXRhL0Zpc2lvdGVyYXBldXRhL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkZpc2lvdGVyYXBldXRhL0Zpc2lvdGVyYXBldXRhL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkZpc2lvdGVyYXBldXRhL0Zpc2lvdGVyYXBldXRhL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiRmlzaW90ZXJhcGV1dGEvRmlzaW90ZXJhcGV1dGEvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiRmlzaW90ZXJhcGV1dGEvRmlzaW90ZXJhcGV1dGEvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PkZpc2lvdGVyYXBldXRhU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBHZXROZXh0TnVtYmVyUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBQcmVmaXg/OiBzdHJpbmc7XHJcbiAgICAgICAgTGVuZ3RoPzogbnVtYmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgR2V0TmV4dE51bWJlclJlc3BvbnNlIGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlc3BvbnNlIHtcclxuICAgICAgICBOdW1iZXI/OiBudW1iZXI7XHJcbiAgICAgICAgU2VyaWFsPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkluc3RydXRvciB7XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5JbnN0cnV0b3Ige1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbnN0cnV0b3JGb3JtIHtcclxuICAgICAgICBEZXNOb21lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGVzUmc6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEZXNDcGY6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBJZGZUaXBvQXRpdmlkYWRlOiBTZXJlbml0eS5FbnVtRWRpdG9yO1xyXG4gICAgICAgIElkZkF0aXZvOiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJbnN0cnV0b3JGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdJbnN0cnV0b3IuSW5zdHJ1dG9yJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFJbnN0cnV0b3JGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBJbnN0cnV0b3JGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW51bUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuQm9vbGVhbkVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShJbnN0cnV0b3JGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc05vbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGVzUmcnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGVzQ3BmJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0lkZlRpcG9BdGl2aWRhZGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnSWRmQXRpdm8nLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5JbnN0cnV0b3Ige1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbnN0cnV0b3JSb3cge1xyXG4gICAgICAgIENvZEluc3RydXRvcj86IG51bWJlcjtcclxuICAgICAgICBEZXNOb21lPzogc3RyaW5nO1xyXG4gICAgICAgIERlc1JnPzogc3RyaW5nO1xyXG4gICAgICAgIERlc0NwZj86IHN0cmluZztcclxuICAgICAgICBJZGZUaXBvQXRpdmlkYWRlPzogbnVtYmVyO1xyXG4gICAgICAgIElkZkF0aXZvPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEluc3RydXRvclJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnQ29kSW5zdHJ1dG9yJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0Rlc05vbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnSW5zdHJ1dG9yLkluc3RydXRvcic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdJbnN0cnV0b3IuSW5zdHJ1dG9yJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxJbnN0cnV0b3JSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPEluc3RydXRvclJvdz4oJ0luc3RydXRvci5JbnN0cnV0b3InKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnSW5zdHJ1dG9yOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0luc3RydXRvcjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnSW5zdHJ1dG9yOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0luc3RydXRvcjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBDb2RJbnN0cnV0b3IgPSBcIkNvZEluc3RydXRvclwiLFxyXG4gICAgICAgICAgICBEZXNOb21lID0gXCJEZXNOb21lXCIsXHJcbiAgICAgICAgICAgIERlc1JnID0gXCJEZXNSZ1wiLFxyXG4gICAgICAgICAgICBEZXNDcGYgPSBcIkRlc0NwZlwiLFxyXG4gICAgICAgICAgICBJZGZUaXBvQXRpdmlkYWRlID0gXCJJZGZUaXBvQXRpdmlkYWRlXCIsXHJcbiAgICAgICAgICAgIElkZkF0aXZvID0gXCJJZGZBdGl2b1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uSW5zdHJ1dG9yIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSW5zdHJ1dG9yU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnSW5zdHJ1dG9yL0luc3RydXRvcic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxJbnN0cnV0b3JSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxJbnN0cnV0b3JSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8SW5zdHJ1dG9yUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEluc3RydXRvclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJJbnN0cnV0b3IvSW5zdHJ1dG9yL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkluc3RydXRvci9JbnN0cnV0b3IvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiSW5zdHJ1dG9yL0luc3RydXRvci9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkluc3RydXRvci9JbnN0cnV0b3IvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiSW5zdHJ1dG9yL0luc3RydXRvci9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+SW5zdHJ1dG9yU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uSW5zdHJ1dG9yIHtcclxuICAgIGV4cG9ydCBlbnVtIEluc3RydXRvclRpcG8ge1xyXG4gICAgICAgIEluZGl2aWR1YWwgPSAwLFxyXG4gICAgICAgIEdydXBvID0gMSxcclxuICAgICAgICBUb2RhcyA9IDJcclxuICAgIH1cclxuICAgIFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFbnVtVHlwZShJbnN0cnV0b3JUaXBvLCAnR3ltQWN0aW9uLkluc3RydXRvci5JbnN0cnV0b3JUaXBvJywgJ0luc3RydXRvci5JbnN0cnV0b3JUaXBvJyk7XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBPbGRQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ2hhbmdlUGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2hhbmdlUGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ09sZFBhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05ld1Bhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgT2xkUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBGb3Jnb3RQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFGb3Jnb3RQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5FbWFpbEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShGb3Jnb3RQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRm9yZ290UGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dpbkZvcm0ge1xyXG4gICAgICAgIFVzZXJuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuTG9naW4nO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUxvZ2luRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTG9naW5Gb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTG9naW5Gb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJuYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExvZ2luUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVzZXRQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFSZXNldFBhc3N3b3JkRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUmVzZXRQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUmVzZXRQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTmV3UGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFRva2VuPzogc3RyaW5nO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2lnblVwRm9ybSB7XHJcbiAgICAgICAgRGlzcGxheU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbWFpbDogU2VyZW5pdHkuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybUVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2lnblVwRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5TaWduVXAnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNpZ25VcEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFNpZ25VcEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5FbWFpbEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoU2lnblVwRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNpZ25VcFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uUGFnYW1lbnRvIHtcclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLlBhZ2FtZW50byB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBhZ2FtZW50b0Zvcm0ge1xyXG4gICAgICAgIENvZFBsYW5vOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgQ29kQXVsYTogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIENvZENsaWVudGU6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBEYXRWZW5jaW1lbnRvOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIERhdFBhZ2FtZW50bzogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBWbHJQYWdvOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBQYWdhbWVudG9Gb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdQYWdhbWVudG8uUGFnYW1lbnRvJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFQYWdhbWVudG9Gb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBQYWdhbWVudG9Gb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkxvb2t1cEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGF0ZUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuRGVjaW1hbEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShQYWdhbWVudG9Gb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvZFBsYW5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvZEF1bGEnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29kQ2xpZW50ZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEYXRWZW5jaW1lbnRvJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RhdFBhZ2FtZW50bycsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdWbHJQYWdvJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uUGFnYW1lbnRvIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGFnYW1lbnRvUm93IHtcclxuICAgICAgICBDb2RQYWdhbWVudG8/OiBudW1iZXI7XHJcbiAgICAgICAgQ29kUGxhbm8/OiBudW1iZXI7XHJcbiAgICAgICAgQ29kQXVsYT86IG51bWJlcjtcclxuICAgICAgICBDb2RDbGllbnRlPzogbnVtYmVyO1xyXG4gICAgICAgIERhdFZlbmNpbWVudG8/OiBzdHJpbmc7XHJcbiAgICAgICAgRGF0UGFnYW1lbnRvPzogc3RyaW5nO1xyXG4gICAgICAgIFZsclBhZ28/OiBudW1iZXI7XHJcbiAgICAgICAgQ29kUGxhbm9EZXNOb21lPzogc3RyaW5nO1xyXG4gICAgICAgIENvZFBsYW5vSWRmVGlwbz86IHN0cmluZztcclxuICAgICAgICBDb2RQbGFub0lkZkFpdm8/OiBib29sZWFuO1xyXG4gICAgICAgIENvZEF1bGFEZXNBdWxhPzogc3RyaW5nO1xyXG4gICAgICAgIENvZEF1bGFJZGZUaXBvQXRpdmlkYWRlPzogYm9vbGVhbjtcclxuICAgICAgICBDb2RBdWxhSWRmQXRpdm8/OiBib29sZWFuO1xyXG4gICAgICAgIENvZENsaWVudGVDb2RCaW9tZXRyaWE/OiBudW1iZXI7XHJcbiAgICAgICAgQ29kQ2xpZW50ZURlc05vbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29kQ2xpZW50ZURlc1JnPzogc3RyaW5nO1xyXG4gICAgICAgIENvZENsaWVudGVEZXNDcGY/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29kQ2xpZW50ZUlkZkFkaW1wbGVudGU/OiBib29sZWFuO1xyXG4gICAgICAgIENvZENsaWVudGVJZGZBdGl2bz86IGJvb2xlYW47XHJcbiAgICAgICAgQ29kQ2xpZW50ZURlc0VuZGVyZWNvPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUGFnYW1lbnRvUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdDb2RQYWdhbWVudG8nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnUGFnYW1lbnRvLlBhZ2FtZW50byc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnUGFnYW1lbnRvOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ1BhZ2FtZW50bzpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnUGFnYW1lbnRvOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ1BhZ2FtZW50bzpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBDb2RQYWdhbWVudG8gPSBcIkNvZFBhZ2FtZW50b1wiLFxyXG4gICAgICAgICAgICBDb2RQbGFubyA9IFwiQ29kUGxhbm9cIixcclxuICAgICAgICAgICAgQ29kQXVsYSA9IFwiQ29kQXVsYVwiLFxyXG4gICAgICAgICAgICBDb2RDbGllbnRlID0gXCJDb2RDbGllbnRlXCIsXHJcbiAgICAgICAgICAgIERhdFZlbmNpbWVudG8gPSBcIkRhdFZlbmNpbWVudG9cIixcclxuICAgICAgICAgICAgRGF0UGFnYW1lbnRvID0gXCJEYXRQYWdhbWVudG9cIixcclxuICAgICAgICAgICAgVmxyUGFnbyA9IFwiVmxyUGFnb1wiLFxyXG4gICAgICAgICAgICBDb2RQbGFub0Rlc05vbWUgPSBcIkNvZFBsYW5vRGVzTm9tZVwiLFxyXG4gICAgICAgICAgICBDb2RQbGFub0lkZlRpcG8gPSBcIkNvZFBsYW5vSWRmVGlwb1wiLFxyXG4gICAgICAgICAgICBDb2RQbGFub0lkZkFpdm8gPSBcIkNvZFBsYW5vSWRmQWl2b1wiLFxyXG4gICAgICAgICAgICBDb2RBdWxhRGVzQXVsYSA9IFwiQ29kQXVsYURlc0F1bGFcIixcclxuICAgICAgICAgICAgQ29kQXVsYUlkZlRpcG9BdGl2aWRhZGUgPSBcIkNvZEF1bGFJZGZUaXBvQXRpdmlkYWRlXCIsXHJcbiAgICAgICAgICAgIENvZEF1bGFJZGZBdGl2byA9IFwiQ29kQXVsYUlkZkF0aXZvXCIsXHJcbiAgICAgICAgICAgIENvZENsaWVudGVDb2RCaW9tZXRyaWEgPSBcIkNvZENsaWVudGVDb2RCaW9tZXRyaWFcIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZURlc05vbWUgPSBcIkNvZENsaWVudGVEZXNOb21lXCIsXHJcbiAgICAgICAgICAgIENvZENsaWVudGVEZXNSZyA9IFwiQ29kQ2xpZW50ZURlc1JnXCIsXHJcbiAgICAgICAgICAgIENvZENsaWVudGVEZXNDcGYgPSBcIkNvZENsaWVudGVEZXNDcGZcIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZUlkZkFkaW1wbGVudGUgPSBcIkNvZENsaWVudGVJZGZBZGltcGxlbnRlXCIsXHJcbiAgICAgICAgICAgIENvZENsaWVudGVJZGZBdGl2byA9IFwiQ29kQ2xpZW50ZUlkZkF0aXZvXCIsXHJcbiAgICAgICAgICAgIENvZENsaWVudGVEZXNFbmRlcmVjbyA9IFwiQ29kQ2xpZW50ZURlc0VuZGVyZWNvXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5QYWdhbWVudG8ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQYWdhbWVudG9TZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdQYWdhbWVudG8vUGFnYW1lbnRvJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFBhZ2FtZW50b1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFBhZ2FtZW50b1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxQYWdhbWVudG9Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8UGFnYW1lbnRvUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIlBhZ2FtZW50by9QYWdhbWVudG8vQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiUGFnYW1lbnRvL1BhZ2FtZW50by9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJQYWdhbWVudG8vUGFnYW1lbnRvL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiUGFnYW1lbnRvL1BhZ2FtZW50by9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJQYWdhbWVudG8vUGFnYW1lbnRvL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5QYWdhbWVudG9TZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5QbGFubyB7XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5QbGFubyB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBsYW5vRm9ybSB7XHJcbiAgICAgICAgRGVzTm9tZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIElkZlRpcG86IFNlcmVuaXR5LkVudW1FZGl0b3I7XHJcbiAgICAgICAgSWRmQWl2bzogU2VyZW5pdHkuQm9vbGVhbkVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUGxhbm9Gb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdQbGFuby5QbGFubyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUGxhbm9Gb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBQbGFub0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5FbnVtRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5Cb29sZWFuRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFBsYW5vRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdEZXNOb21lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0lkZlRpcG8nLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnSWRmQWl2bycsIHcyXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLlBsYW5vIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGxhbm9Sb3cge1xyXG4gICAgICAgIENvZFBsYW5vPzogbnVtYmVyO1xyXG4gICAgICAgIERlc05vbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgSWRmVGlwbz86IG51bWJlcjtcclxuICAgICAgICBJZGZBaXZvPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFBsYW5vUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdDb2RQbGFubyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdEZXNOb21lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ1BsYW5vLlBsYW5vJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ1BsYW5vLlBsYW5vJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxQbGFub1Jvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8UGxhbm9Sb3c+KCdQbGFuby5QbGFubycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdQbGFubzpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdQbGFubzpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnUGxhbm86R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnUGxhbm86R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgQ29kUGxhbm8gPSBcIkNvZFBsYW5vXCIsXHJcbiAgICAgICAgICAgIERlc05vbWUgPSBcIkRlc05vbWVcIixcclxuICAgICAgICAgICAgSWRmVGlwbyA9IFwiSWRmVGlwb1wiLFxyXG4gICAgICAgICAgICBJZGZBaXZvID0gXCJJZGZBaXZvXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5QbGFubyB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFBsYW5vU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnUGxhbm8vUGxhbm8nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UGxhbm9Sb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxQbGFub1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxQbGFub1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxQbGFub1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJQbGFuby9QbGFuby9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJQbGFuby9QbGFuby9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJQbGFuby9QbGFuby9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlBsYW5vL1BsYW5vL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIlBsYW5vL1BsYW5vL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5QbGFub1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLlBsYW5vIHtcclxuICAgIGV4cG9ydCBlbnVtIFBsYW5vVGlwbyB7XHJcbiAgICAgICAgTWVuc2FsID0gMCxcclxuICAgICAgICBBbnVhbCA9IDFcclxuICAgIH1cclxuICAgIFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFbnVtVHlwZShQbGFub1RpcG8sICdHeW1BY3Rpb24uUGxhbm8uUGxhbm9UaXBvJywgJ1BsYW5vLlBsYW5vVGlwbycpO1xyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uUGxhbm9BdWxhIHtcclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLlBsYW5vQXVsYSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBsYW5vQXVsYUZvcm0ge1xyXG4gICAgICAgIENvZFBsYW5vOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgQ29kQXVsYTogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIFZsckF1bGE6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFBsYW5vQXVsYUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1BsYW5vQXVsYS5QbGFub0F1bGEnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVBsYW5vQXVsYUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFBsYW5vQXVsYUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EZWNpbWFsRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFBsYW5vQXVsYUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnQ29kUGxhbm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29kQXVsYScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdWbHJBdWxhJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uUGxhbm9BdWxhIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGxhbm9BdWxhUm93IHtcclxuICAgICAgICBDb2RSZWdpc3Rybz86IG51bWJlcjtcclxuICAgICAgICBDb2RQbGFubz86IG51bWJlcjtcclxuICAgICAgICBDb2RBdWxhPzogbnVtYmVyO1xyXG4gICAgICAgIFZsckF1bGE/OiBudW1iZXI7XHJcbiAgICAgICAgQ29kUGxhbm9EZXNOb21lPzogc3RyaW5nO1xyXG4gICAgICAgIENvZFBsYW5vSWRmVGlwbz86IHN0cmluZztcclxuICAgICAgICBDb2RQbGFub0lkZkFpdm8/OiBib29sZWFuO1xyXG4gICAgICAgIENvZEF1bGFEZXNBdWxhPzogc3RyaW5nO1xyXG4gICAgICAgIENvZEF1bGFJZGZUaXBvQXRpdmlkYWRlPzogYm9vbGVhbjtcclxuICAgICAgICBDb2RBdWxhSWRmQXRpdm8/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUGxhbm9BdWxhUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdDb2RSZWdpc3Rybyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdDb2RQbGFub0Rlc05vbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnUGxhbm9BdWxhLlBsYW5vQXVsYSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnUGxhbm9BdWxhOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ1BsYW5vQXVsYTpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnUGxhbm9BdWxhOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ1BsYW5vQXVsYTpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBDb2RSZWdpc3RybyA9IFwiQ29kUmVnaXN0cm9cIixcclxuICAgICAgICAgICAgQ29kUGxhbm8gPSBcIkNvZFBsYW5vXCIsXHJcbiAgICAgICAgICAgIENvZEF1bGEgPSBcIkNvZEF1bGFcIixcclxuICAgICAgICAgICAgVmxyQXVsYSA9IFwiVmxyQXVsYVwiLFxyXG4gICAgICAgICAgICBDb2RQbGFub0Rlc05vbWUgPSBcIkNvZFBsYW5vRGVzTm9tZVwiLFxyXG4gICAgICAgICAgICBDb2RQbGFub0lkZlRpcG8gPSBcIkNvZFBsYW5vSWRmVGlwb1wiLFxyXG4gICAgICAgICAgICBDb2RQbGFub0lkZkFpdm8gPSBcIkNvZFBsYW5vSWRmQWl2b1wiLFxyXG4gICAgICAgICAgICBDb2RBdWxhRGVzQXVsYSA9IFwiQ29kQXVsYURlc0F1bGFcIixcclxuICAgICAgICAgICAgQ29kQXVsYUlkZlRpcG9BdGl2aWRhZGUgPSBcIkNvZEF1bGFJZGZUaXBvQXRpdmlkYWRlXCIsXHJcbiAgICAgICAgICAgIENvZEF1bGFJZGZBdGl2byA9IFwiQ29kQXVsYUlkZkF0aXZvXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5QbGFub0F1bGEge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQbGFub0F1bGFTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdQbGFub0F1bGEvUGxhbm9BdWxhJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFBsYW5vQXVsYVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFBsYW5vQXVsYVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxQbGFub0F1bGFSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8UGxhbm9BdWxhUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIlBsYW5vQXVsYS9QbGFub0F1bGEvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiUGxhbm9BdWxhL1BsYW5vQXVsYS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJQbGFub0F1bGEvUGxhbm9BdWxhL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiUGxhbm9BdWxhL1BsYW5vQXVsYS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJQbGFub0F1bGEvUGxhbm9BdWxhL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5QbGFub0F1bGFTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5SZWdpc3Ryb0F1bGEge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uUmVnaXN0cm9BdWxhIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVnaXN0cm9BdWxhRm9ybSB7XHJcbiAgICAgICAgQ29kUGxhbm86IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBDb2RBdWxhOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgQ29kQ2xpZW50ZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIERhdEF1bGE6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlZ2lzdHJvQXVsYUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1JlZ2lzdHJvQXVsYS5SZWdpc3Ryb0F1bGEnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJlZ2lzdHJvQXVsYUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFJlZ2lzdHJvQXVsYUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJlZ2lzdHJvQXVsYUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnQ29kUGxhbm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29kQXVsYScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb2RDbGllbnRlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RhdEF1bGEnLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5SZWdpc3Ryb0F1bGEge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZWdpc3Ryb0F1bGFSb3cge1xyXG4gICAgICAgIENvZFJlZ2lzdHJvPzogbnVtYmVyO1xyXG4gICAgICAgIENvZFBsYW5vPzogbnVtYmVyO1xyXG4gICAgICAgIENvZEF1bGE/OiBudW1iZXI7XHJcbiAgICAgICAgQ29kQ2xpZW50ZT86IG51bWJlcjtcclxuICAgICAgICBEYXRBdWxhPzogc3RyaW5nO1xyXG4gICAgICAgIENvZFBsYW5vRGVzTm9tZT86IHN0cmluZztcclxuICAgICAgICBDb2RQbGFub0lkZlRpcG8/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29kUGxhbm9JZGZBaXZvPzogYm9vbGVhbjtcclxuICAgICAgICBDb2RBdWxhRGVzQXVsYT86IHN0cmluZztcclxuICAgICAgICBDb2RBdWxhSWRmVGlwb0F0aXZpZGFkZT86IGJvb2xlYW47XHJcbiAgICAgICAgQ29kQXVsYUlkZkF0aXZvPzogYm9vbGVhbjtcclxuICAgICAgICBDb2RDbGllbnRlQ29kQmlvbWV0cmlhPzogbnVtYmVyO1xyXG4gICAgICAgIENvZENsaWVudGVEZXNOb21lPzogc3RyaW5nO1xyXG4gICAgICAgIENvZENsaWVudGVEZXNSZz86IHN0cmluZztcclxuICAgICAgICBDb2RDbGllbnRlRGVzQ3BmPzogc3RyaW5nO1xyXG4gICAgICAgIENvZENsaWVudGVJZGZBZGltcGxlbnRlPzogYm9vbGVhbjtcclxuICAgICAgICBDb2RDbGllbnRlSWRmQXRpdm8/OiBib29sZWFuO1xyXG4gICAgICAgIENvZENsaWVudGVEZXNFbmRlcmVjbz86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJlZ2lzdHJvQXVsYVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnQ29kUmVnaXN0cm8nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnUmVnaXN0cm9BdWxhLlJlZ2lzdHJvQXVsYSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnUmVnaXN0cm9BdWxhOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ1JlZ2lzdHJvQXVsYTpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnUmVnaXN0cm9BdWxhOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ1JlZ2lzdHJvQXVsYTpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBDb2RSZWdpc3RybyA9IFwiQ29kUmVnaXN0cm9cIixcclxuICAgICAgICAgICAgQ29kUGxhbm8gPSBcIkNvZFBsYW5vXCIsXHJcbiAgICAgICAgICAgIENvZEF1bGEgPSBcIkNvZEF1bGFcIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZSA9IFwiQ29kQ2xpZW50ZVwiLFxyXG4gICAgICAgICAgICBEYXRBdWxhID0gXCJEYXRBdWxhXCIsXHJcbiAgICAgICAgICAgIENvZFBsYW5vRGVzTm9tZSA9IFwiQ29kUGxhbm9EZXNOb21lXCIsXHJcbiAgICAgICAgICAgIENvZFBsYW5vSWRmVGlwbyA9IFwiQ29kUGxhbm9JZGZUaXBvXCIsXHJcbiAgICAgICAgICAgIENvZFBsYW5vSWRmQWl2byA9IFwiQ29kUGxhbm9JZGZBaXZvXCIsXHJcbiAgICAgICAgICAgIENvZEF1bGFEZXNBdWxhID0gXCJDb2RBdWxhRGVzQXVsYVwiLFxyXG4gICAgICAgICAgICBDb2RBdWxhSWRmVGlwb0F0aXZpZGFkZSA9IFwiQ29kQXVsYUlkZlRpcG9BdGl2aWRhZGVcIixcclxuICAgICAgICAgICAgQ29kQXVsYUlkZkF0aXZvID0gXCJDb2RBdWxhSWRmQXRpdm9cIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZUNvZEJpb21ldHJpYSA9IFwiQ29kQ2xpZW50ZUNvZEJpb21ldHJpYVwiLFxyXG4gICAgICAgICAgICBDb2RDbGllbnRlRGVzTm9tZSA9IFwiQ29kQ2xpZW50ZURlc05vbWVcIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZURlc1JnID0gXCJDb2RDbGllbnRlRGVzUmdcIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZURlc0NwZiA9IFwiQ29kQ2xpZW50ZURlc0NwZlwiLFxyXG4gICAgICAgICAgICBDb2RDbGllbnRlSWRmQWRpbXBsZW50ZSA9IFwiQ29kQ2xpZW50ZUlkZkFkaW1wbGVudGVcIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZUlkZkF0aXZvID0gXCJDb2RDbGllbnRlSWRmQXRpdm9cIixcclxuICAgICAgICAgICAgQ29kQ2xpZW50ZURlc0VuZGVyZWNvID0gXCJDb2RDbGllbnRlRGVzRW5kZXJlY29cIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLlJlZ2lzdHJvQXVsYSB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJlZ2lzdHJvQXVsYVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ1JlZ2lzdHJvQXVsYS9SZWdpc3Ryb0F1bGEnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UmVnaXN0cm9BdWxhUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UmVnaXN0cm9BdWxhUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFJlZ2lzdHJvQXVsYVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxSZWdpc3Ryb0F1bGFSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiUmVnaXN0cm9BdWxhL1JlZ2lzdHJvQXVsYS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJSZWdpc3Ryb0F1bGEvUmVnaXN0cm9BdWxhL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIlJlZ2lzdHJvQXVsYS9SZWdpc3Ryb0F1bGEvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJSZWdpc3Ryb0F1bGEvUmVnaXN0cm9BdWxhL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIlJlZ2lzdHJvQXVsYS9SZWdpc3Ryb0F1bGEvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlJlZ2lzdHJvQXVsYVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgR3ltQWN0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2NyaXB0VXNlckRlZmluaXRpb24ge1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIERpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIElzQWRtaW4/OiBib29sZWFuO1xyXG4gICAgICAgIFBlcm1pc3Npb25zPzogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uVGV4dHMge1xyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIERiIHtcclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBMYW5ndWFnZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSb2xlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb25LZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlUGVybWlzc2lvbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZVJvbGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBUcmFuc2xhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tVGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVudGl0eVBsdXJhbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEtleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE92ZXJyaWRlQ29uZmlybWF0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZUNoYW5nZXNCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2VMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZVRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXJnZXRMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldFRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXIge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXNBY3RpdmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0RGlyZWN0b3J5VXBkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZENvbmZpcm06IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZEhhc2g6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZFNhbHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlckltYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHcmFudGVkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbktleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyUGVybWlzc2lvbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXJSb2xlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBBdWxhIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBBdWxhIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RBdWxhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzQXVsYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkZkF0aXZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWRmVGlwb0F0aXZpZGFkZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQXVsYUluc3RydXRvciB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQXVsYUluc3RydXRvciB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQXVsYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZEF1bGFEZXNBdWxhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQXVsYUlkZkF0aXZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQXVsYUlkZlRpcG9BdGl2aWRhZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RJbnN0cnV0b3I6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RJbnN0cnV0b3JEZXNDcGY6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RJbnN0cnV0b3JEZXNOb21lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kSW5zdHJ1dG9yRGVzUmc6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RJbnN0cnV0b3JJZGZBdGl2bzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZEluc3RydXRvcklkZlRpcG9BdGl2aWRhZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RSZWdpc3Rybzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlc1NhbGE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBIb3JGaW06IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBIb3JJbmljaW86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZGZEb21pbmdvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWRmUXVhcnRhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWRmUXVpbnRhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWRmU2FiYWRvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWRmU2VndW5kYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkZlNleHRhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWRmVGVyY2E6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEF2YWxpYWNhb0Zpc2ljYSB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQXZhbGlhY2FvRmlzaWNhIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RBdmFsaWFjYW9GaXNpY2E6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RDbGllbnRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQ2xpZW50ZUNvZEJpb21ldHJpYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZENsaWVudGVEZXNDcGY6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RDbGllbnRlRGVzRW5kZXJlY286IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RDbGllbnRlRGVzTm9tZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZENsaWVudGVEZXNSZzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZENsaWVudGVJZGZBZGltcGxlbnRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQ2xpZW50ZUlkZkF0aXZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kRmlzaW90ZXJhcGV1dGE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RGaXNpb3RlcmFwZXV0YURlc05vbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RGaXNpb3RlcmFwZXV0YUlkZkF0aXZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGF0QXZhbGlhY2FvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzQW5hbW5lc2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNFeGFtZURvYnJhczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlc0V4YW1lRXJnb21ldHJpY286IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIENsaWVudGUge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIENsaWVudGUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZEJpb21ldHJpYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZENsaWVudGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNDcGY6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNFbmRlcmVjbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlc05vbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNSZzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkZkFkaW1wbGVudGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZGZBdGl2bzogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQ2xpZW50ZVBsYW5vQXVsYSB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQ2xpZW50ZVBsYW5vQXVsYSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQXVsYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEF1bGFEZXNBdWxhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQXVsYUlkZkF0aXZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQXVsYUlkZlRpcG9BdGl2aWRhZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGllbnRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2xpZW50ZUNvZEJpb21ldHJpYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWVudGVEZXNDcGY6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGllbnRlRGVzRW5kZXJlY286IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGllbnRlRGVzTm9tZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWVudGVEZXNSZzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWVudGVJZGZBZGltcGxlbnRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2xpZW50ZUlkZkF0aXZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kUmVnaXN0cm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQbGFubzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBsYW5vRGVzTm9tZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBsYW5vSWRmQWl2bzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBsYW5vSWRmVGlwbzogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQ29tbW9uIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyUHJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByZWZlcmVuY2VUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclByZWZlcmVuY2VJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZhbHVlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBGZXJpYXMge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEZlcmlhcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQXVsYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZEF1bGFEZXNBdWxhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQXVsYUlkZkF0aXZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQXVsYUlkZlRpcG9BdGl2aWRhZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RDbGllbnRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQ2xpZW50ZUNvZEJpb21ldHJpYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZENsaWVudGVEZXNDcGY6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RDbGllbnRlRGVzRW5kZXJlY286IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RDbGllbnRlRGVzTm9tZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZENsaWVudGVEZXNSZzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZENsaWVudGVJZGZBZGltcGxlbnRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQ2xpZW50ZUlkZkF0aXZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kRmVyaWFzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kUGxhbm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RQbGFub0Rlc05vbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RQbGFub0lkZkFpdm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RQbGFub0lkZlRpcG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEYXRGaW06IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEYXRJbmljaW86IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEZpc2lvdGVyYXBldXRhIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBGaXNpb3RlcmFwZXV0YSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kRmlzaW90ZXJhcGV1dGE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNOb21lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWRmQXRpdm86IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEluc3RydXRvciB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgSW5zdHJ1dG9yIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RJbnN0cnV0b3I6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNDcGY6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNOb21lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzUmc6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZGZBdGl2bzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkZlRpcG9BdGl2aWRhZGU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFBhZ2FtZW50byB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUGFnYW1lbnRvIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RBdWxhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQXVsYURlc0F1bGE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RBdWxhSWRmQXRpdm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RBdWxhSWRmVGlwb0F0aXZpZGFkZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZENsaWVudGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RDbGllbnRlQ29kQmlvbWV0cmlhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQ2xpZW50ZURlc0NwZjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZENsaWVudGVEZXNFbmRlcmVjbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZENsaWVudGVEZXNOb21lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQ2xpZW50ZURlc1JnOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQ2xpZW50ZUlkZkFkaW1wbGVudGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RDbGllbnRlSWRmQXRpdm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RQYWdhbWVudG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RQbGFubzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZFBsYW5vRGVzTm9tZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZFBsYW5vSWRmQWl2bzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZFBsYW5vSWRmVGlwbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERhdFBhZ2FtZW50bzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERhdFZlbmNpbWVudG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBWbHJQYWdvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBQbGFubyB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUGxhbm8ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZFBsYW5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzTm9tZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkZkFpdm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZGZUaXBvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBQbGFub0F1bGEge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFBsYW5vQXVsYSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQXVsYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZEF1bGFEZXNBdWxhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQXVsYUlkZkF0aXZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQXVsYUlkZlRpcG9BdGl2aWRhZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RQbGFubzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZFBsYW5vRGVzTm9tZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZFBsYW5vSWRmQWl2bzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZFBsYW5vSWRmVGlwbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZFJlZ2lzdHJvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVmxyQXVsYTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgUmVnaXN0cm9BdWxhIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSZWdpc3Ryb0F1bGEge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZEF1bGE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RBdWxhRGVzQXVsYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZEF1bGFJZGZBdGl2bzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZEF1bGFJZGZUaXBvQXRpdmlkYWRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQ2xpZW50ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZENsaWVudGVDb2RCaW9tZXRyaWE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RDbGllbnRlRGVzQ3BmOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQ2xpZW50ZURlc0VuZGVyZWNvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kQ2xpZW50ZURlc05vbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RDbGllbnRlRGVzUmc6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RDbGllbnRlSWRmQWRpbXBsZW50ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZENsaWVudGVJZGZBdGl2bzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZFBsYW5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kUGxhbm9EZXNOb21lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kUGxhbm9JZGZBaXZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kUGxhbm9JZGZUaXBvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29kUmVnaXN0cm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEYXRBdWxhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgRm9ybXMge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQ2hhbmdlUGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEZvcmdvdFBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1JbmZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgTG9naW4ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZhY2Vib29rQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9yZ290UGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHb29nbGVCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPUjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlbWVtYmVyTWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaWduSW5CdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaWduVXBCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJlc2V0UGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWxTdWJqZWN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgU2lnblVwIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY2NlcHRUZXJtczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjdGl2YXRlRW1haWxTdWJqZWN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWN0aXZhdGlvbkNvbXBsZXRlTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybUVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1JbmZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgU2l0ZSB7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBBY2Nlc3NEZW5pZWQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2xpY2tUb0NoYW5nZVVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTGFja1Blcm1pc3Npb25zOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOb3RMb2dnZWRJbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGFnZVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQmFzaWNQcm9ncmVzc0RpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYW5jZWxUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGxlYXNlV2FpdDogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEJ1bGtTZXJ2aWNlQWN0aW9uIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFsbEhhZEVycm9yc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQWxsU3VjY2Vzc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybWF0aW9uRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFcnJvckNvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOb3RoaW5nVG9Qcm9jZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb21lSGFkRXJyb3JzRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzQ291bnQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBEYXNoYm9hcmQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ29udGVudERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgTGF5b3V0IHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlckNvcHlyaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVySW5mbzogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVyUmlnaHRzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHZW5lcmFsU2V0dGluZ3M6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFjazogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFja0xpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsdWU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmx1ZUxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUdyZWVuOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUdyZWVuTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUHVycGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVB1cnBsZUxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVJlZDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVSZWRMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVZZWxsb3c6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lWWVsbG93TGlnaHQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvbkRpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBVc2VyRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRQZXJtaXNzaW9uc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdFJvbGVzQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25EaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdyYW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXZva2U6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlclJvbGVEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVmFsaWRhdGlvbkVycm9yIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFZhbGlkYXRpb24ge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBBdXRoZW50aWNhdGlvbkVycm9yOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IENhbnRGaW5kVXNlcldpdGhFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBDdXJyZW50UGFzc3dvcmRNaXNtYXRjaDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGVGb3JlaWduS2V5RXJyb3I6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgRW1haWxDb25maXJtOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsSW5Vc2U6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgSW52YWxpZEFjdGl2YXRlVG9rZW46IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgSW52YWxpZFJlc2V0VG9rZW46IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTYXZlUHJpbWFyeUtleUVycm9yOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgR3ltQWN0aW9uWydUZXh0cyddID0gUS5wcm94eVRleHRzKFRleHRzLCAnJywge0RiOntBZG1pbmlzdHJhdGlvbjp7TGFuZ3VhZ2U6e0lkOjEsTGFuZ3VhZ2VJZDoxLExhbmd1YWdlTmFtZToxfSxSb2xlOntSb2xlSWQ6MSxSb2xlTmFtZToxfSxSb2xlUGVybWlzc2lvbjp7UGVybWlzc2lvbktleToxLFJvbGVJZDoxLFJvbGVQZXJtaXNzaW9uSWQ6MSxSb2xlUm9sZU5hbWU6MX0sVHJhbnNsYXRpb246e0N1c3RvbVRleHQ6MSxFbnRpdHlQbHVyYWw6MSxLZXk6MSxPdmVycmlkZUNvbmZpcm1hdGlvbjoxLFNhdmVDaGFuZ2VzQnV0dG9uOjEsU291cmNlTGFuZ3VhZ2U6MSxTb3VyY2VUZXh0OjEsVGFyZ2V0TGFuZ3VhZ2U6MSxUYXJnZXRUZXh0OjF9LFVzZXI6e0Rpc3BsYXlOYW1lOjEsRW1haWw6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsSXNBY3RpdmU6MSxMYXN0RGlyZWN0b3J5VXBkYXRlOjEsUGFzc3dvcmQ6MSxQYXNzd29yZENvbmZpcm06MSxQYXNzd29yZEhhc2g6MSxQYXNzd29yZFNhbHQ6MSxTb3VyY2U6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjEsVXNlcklkOjEsVXNlckltYWdlOjEsVXNlcm5hbWU6MX0sVXNlclBlcm1pc3Npb246e0dyYW50ZWQ6MSxQZXJtaXNzaW9uS2V5OjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJQZXJtaXNzaW9uSWQ6MSxVc2VybmFtZToxfSxVc2VyUm9sZTp7Um9sZUlkOjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJSb2xlSWQ6MSxVc2VybmFtZToxfX0sQXVsYTp7QXVsYTp7Q29kQXVsYToxLERlc0F1bGE6MSxJZGZBdGl2bzoxLElkZlRpcG9BdGl2aWRhZGU6MX19LEF1bGFJbnN0cnV0b3I6e0F1bGFJbnN0cnV0b3I6e0NvZEF1bGE6MSxDb2RBdWxhRGVzQXVsYToxLENvZEF1bGFJZGZBdGl2bzoxLENvZEF1bGFJZGZUaXBvQXRpdmlkYWRlOjEsQ29kSW5zdHJ1dG9yOjEsQ29kSW5zdHJ1dG9yRGVzQ3BmOjEsQ29kSW5zdHJ1dG9yRGVzTm9tZToxLENvZEluc3RydXRvckRlc1JnOjEsQ29kSW5zdHJ1dG9ySWRmQXRpdm86MSxDb2RJbnN0cnV0b3JJZGZUaXBvQXRpdmlkYWRlOjEsQ29kUmVnaXN0cm86MSxEZXNTYWxhOjEsSG9yRmltOjEsSG9ySW5pY2lvOjEsSWRmRG9taW5nbzoxLElkZlF1YXJ0YToxLElkZlF1aW50YToxLElkZlNhYmFkbzoxLElkZlNlZ3VuZGE6MSxJZGZTZXh0YToxLElkZlRlcmNhOjF9fSxBdmFsaWFjYW9GaXNpY2E6e0F2YWxpYWNhb0Zpc2ljYTp7Q29kQXZhbGlhY2FvRmlzaWNhOjEsQ29kQ2xpZW50ZToxLENvZENsaWVudGVDb2RCaW9tZXRyaWE6MSxDb2RDbGllbnRlRGVzQ3BmOjEsQ29kQ2xpZW50ZURlc0VuZGVyZWNvOjEsQ29kQ2xpZW50ZURlc05vbWU6MSxDb2RDbGllbnRlRGVzUmc6MSxDb2RDbGllbnRlSWRmQWRpbXBsZW50ZToxLENvZENsaWVudGVJZGZBdGl2bzoxLENvZEZpc2lvdGVyYXBldXRhOjEsQ29kRmlzaW90ZXJhcGV1dGFEZXNOb21lOjEsQ29kRmlzaW90ZXJhcGV1dGFJZGZBdGl2bzoxLERhdEF2YWxpYWNhbzoxLERlc0FuYW1uZXNlOjEsRGVzRXhhbWVEb2JyYXM6MSxEZXNFeGFtZUVyZ29tZXRyaWNvOjF9fSxDbGllbnRlOntDbGllbnRlOntDb2RCaW9tZXRyaWE6MSxDb2RDbGllbnRlOjEsRGVzQ3BmOjEsRGVzRW5kZXJlY286MSxEZXNOb21lOjEsRGVzUmc6MSxJZGZBZGltcGxlbnRlOjEsSWRmQXRpdm86MX19LENsaWVudGVQbGFub0F1bGE6e0NsaWVudGVQbGFub0F1bGE6e0F1bGE6MSxBdWxhRGVzQXVsYToxLEF1bGFJZGZBdGl2bzoxLEF1bGFJZGZUaXBvQXRpdmlkYWRlOjEsQ2xpZW50ZToxLENsaWVudGVDb2RCaW9tZXRyaWE6MSxDbGllbnRlRGVzQ3BmOjEsQ2xpZW50ZURlc0VuZGVyZWNvOjEsQ2xpZW50ZURlc05vbWU6MSxDbGllbnRlRGVzUmc6MSxDbGllbnRlSWRmQWRpbXBsZW50ZToxLENsaWVudGVJZGZBdGl2bzoxLENvZFJlZ2lzdHJvOjEsUGxhbm86MSxQbGFub0Rlc05vbWU6MSxQbGFub0lkZkFpdm86MSxQbGFub0lkZlRpcG86MX19LENvbW1vbjp7VXNlclByZWZlcmVuY2U6e05hbWU6MSxQcmVmZXJlbmNlVHlwZToxLFVzZXJJZDoxLFVzZXJQcmVmZXJlbmNlSWQ6MSxWYWx1ZToxfX0sRmVyaWFzOntGZXJpYXM6e0NvZEF1bGE6MSxDb2RBdWxhRGVzQXVsYToxLENvZEF1bGFJZGZBdGl2bzoxLENvZEF1bGFJZGZUaXBvQXRpdmlkYWRlOjEsQ29kQ2xpZW50ZToxLENvZENsaWVudGVDb2RCaW9tZXRyaWE6MSxDb2RDbGllbnRlRGVzQ3BmOjEsQ29kQ2xpZW50ZURlc0VuZGVyZWNvOjEsQ29kQ2xpZW50ZURlc05vbWU6MSxDb2RDbGllbnRlRGVzUmc6MSxDb2RDbGllbnRlSWRmQWRpbXBsZW50ZToxLENvZENsaWVudGVJZGZBdGl2bzoxLENvZEZlcmlhczoxLENvZFBsYW5vOjEsQ29kUGxhbm9EZXNOb21lOjEsQ29kUGxhbm9JZGZBaXZvOjEsQ29kUGxhbm9JZGZUaXBvOjEsRGF0RmltOjEsRGF0SW5pY2lvOjF9fSxGaXNpb3RlcmFwZXV0YTp7RmlzaW90ZXJhcGV1dGE6e0NvZEZpc2lvdGVyYXBldXRhOjEsRGVzTm9tZToxLElkZkF0aXZvOjF9fSxJbnN0cnV0b3I6e0luc3RydXRvcjp7Q29kSW5zdHJ1dG9yOjEsRGVzQ3BmOjEsRGVzTm9tZToxLERlc1JnOjEsSWRmQXRpdm86MSxJZGZUaXBvQXRpdmlkYWRlOjF9fSxQYWdhbWVudG86e1BhZ2FtZW50bzp7Q29kQXVsYToxLENvZEF1bGFEZXNBdWxhOjEsQ29kQXVsYUlkZkF0aXZvOjEsQ29kQXVsYUlkZlRpcG9BdGl2aWRhZGU6MSxDb2RDbGllbnRlOjEsQ29kQ2xpZW50ZUNvZEJpb21ldHJpYToxLENvZENsaWVudGVEZXNDcGY6MSxDb2RDbGllbnRlRGVzRW5kZXJlY286MSxDb2RDbGllbnRlRGVzTm9tZToxLENvZENsaWVudGVEZXNSZzoxLENvZENsaWVudGVJZGZBZGltcGxlbnRlOjEsQ29kQ2xpZW50ZUlkZkF0aXZvOjEsQ29kUGFnYW1lbnRvOjEsQ29kUGxhbm86MSxDb2RQbGFub0Rlc05vbWU6MSxDb2RQbGFub0lkZkFpdm86MSxDb2RQbGFub0lkZlRpcG86MSxEYXRQYWdhbWVudG86MSxEYXRWZW5jaW1lbnRvOjEsVmxyUGFnbzoxfX0sUGxhbm86e1BsYW5vOntDb2RQbGFubzoxLERlc05vbWU6MSxJZGZBaXZvOjEsSWRmVGlwbzoxfX0sUGxhbm9BdWxhOntQbGFub0F1bGE6e0NvZEF1bGE6MSxDb2RBdWxhRGVzQXVsYToxLENvZEF1bGFJZGZBdGl2bzoxLENvZEF1bGFJZGZUaXBvQXRpdmlkYWRlOjEsQ29kUGxhbm86MSxDb2RQbGFub0Rlc05vbWU6MSxDb2RQbGFub0lkZkFpdm86MSxDb2RQbGFub0lkZlRpcG86MSxDb2RSZWdpc3RybzoxLFZsckF1bGE6MX19LFJlZ2lzdHJvQXVsYTp7UmVnaXN0cm9BdWxhOntDb2RBdWxhOjEsQ29kQXVsYURlc0F1bGE6MSxDb2RBdWxhSWRmQXRpdm86MSxDb2RBdWxhSWRmVGlwb0F0aXZpZGFkZToxLENvZENsaWVudGU6MSxDb2RDbGllbnRlQ29kQmlvbWV0cmlhOjEsQ29kQ2xpZW50ZURlc0NwZjoxLENvZENsaWVudGVEZXNFbmRlcmVjbzoxLENvZENsaWVudGVEZXNOb21lOjEsQ29kQ2xpZW50ZURlc1JnOjEsQ29kQ2xpZW50ZUlkZkFkaW1wbGVudGU6MSxDb2RDbGllbnRlSWRmQXRpdm86MSxDb2RQbGFubzoxLENvZFBsYW5vRGVzTm9tZToxLENvZFBsYW5vSWRmQWl2bzoxLENvZFBsYW5vSWRmVGlwbzoxLENvZFJlZ2lzdHJvOjEsRGF0QXVsYToxfX19LEZvcm1zOntNZW1iZXJzaGlwOntDaGFuZ2VQYXNzd29yZDp7Rm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxGb3Jnb3RQYXNzd29yZDp7QmFja1RvTG9naW46MSxGb3JtSW5mbzoxLEZvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sTG9naW46e0ZhY2Vib29rQnV0dG9uOjEsRm9yZ290UGFzc3dvcmQ6MSxGb3JtVGl0bGU6MSxHb29nbGVCdXR0b246MSxPUjoxLFJlbWVtYmVyTWU6MSxTaWduSW5CdXR0b246MSxTaWduVXBCdXR0b246MX0sUmVzZXRQYXNzd29yZDp7QmFja1RvTG9naW46MSxFbWFpbFN1YmplY3Q6MSxGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LFNpZ25VcDp7QWNjZXB0VGVybXM6MSxBY3RpdmF0ZUVtYWlsU3ViamVjdDoxLEFjdGl2YXRpb25Db21wbGV0ZU1lc3NhZ2U6MSxCYWNrVG9Mb2dpbjoxLENvbmZpcm1FbWFpbDoxLENvbmZpcm1QYXNzd29yZDoxLERpc3BsYXlOYW1lOjEsRW1haWw6MSxGb3JtSW5mbzoxLEZvcm1UaXRsZToxLFBhc3N3b3JkOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfX19LFNpdGU6e0FjY2Vzc0RlbmllZDp7Q2xpY2tUb0NoYW5nZVVzZXI6MSxDbGlja1RvTG9naW46MSxMYWNrUGVybWlzc2lvbnM6MSxOb3RMb2dnZWRJbjoxLFBhZ2VUaXRsZToxfSxCYXNpY1Byb2dyZXNzRGlhbG9nOntDYW5jZWxUaXRsZToxLFBsZWFzZVdhaXQ6MX0sQnVsa1NlcnZpY2VBY3Rpb246e0FsbEhhZEVycm9yc0Zvcm1hdDoxLEFsbFN1Y2Nlc3NGb3JtYXQ6MSxDb25maXJtYXRpb25Gb3JtYXQ6MSxFcnJvckNvdW50OjEsTm90aGluZ1RvUHJvY2VzczoxLFNvbWVIYWRFcnJvcnNGb3JtYXQ6MSxTdWNjZXNzQ291bnQ6MX0sRGFzaGJvYXJkOntDb250ZW50RGVzY3JpcHRpb246MX0sTGF5b3V0OntGb290ZXJDb3B5cmlnaHQ6MSxGb290ZXJJbmZvOjEsRm9vdGVyUmlnaHRzOjEsR2VuZXJhbFNldHRpbmdzOjEsTGFuZ3VhZ2U6MSxUaGVtZToxLFRoZW1lQmxhY2s6MSxUaGVtZUJsYWNrTGlnaHQ6MSxUaGVtZUJsdWU6MSxUaGVtZUJsdWVMaWdodDoxLFRoZW1lR3JlZW46MSxUaGVtZUdyZWVuTGlnaHQ6MSxUaGVtZVB1cnBsZToxLFRoZW1lUHVycGxlTGlnaHQ6MSxUaGVtZVJlZDoxLFRoZW1lUmVkTGlnaHQ6MSxUaGVtZVllbGxvdzoxLFRoZW1lWWVsbG93TGlnaHQ6MX0sUm9sZVBlcm1pc3Npb25EaWFsb2c6e0RpYWxvZ1RpdGxlOjEsRWRpdEJ1dHRvbjoxLFNhdmVTdWNjZXNzOjF9LFVzZXJEaWFsb2c6e0VkaXRQZXJtaXNzaW9uc0J1dHRvbjoxLEVkaXRSb2xlc0J1dHRvbjoxfSxVc2VyUGVybWlzc2lvbkRpYWxvZzp7RGlhbG9nVGl0bGU6MSxHcmFudDoxLFBlcm1pc3Npb246MSxSZXZva2U6MSxTYXZlU3VjY2VzczoxfSxVc2VyUm9sZURpYWxvZzp7RGlhbG9nVGl0bGU6MSxTYXZlU3VjY2VzczoxfSxWYWxpZGF0aW9uRXJyb3I6e1RpdGxlOjF9fSxWYWxpZGF0aW9uOntBdXRoZW50aWNhdGlvbkVycm9yOjEsQ2FudEZpbmRVc2VyV2l0aEVtYWlsOjEsQ3VycmVudFBhc3N3b3JkTWlzbWF0Y2g6MSxEZWxldGVGb3JlaWduS2V5RXJyb3I6MSxFbWFpbENvbmZpcm06MSxFbWFpbEluVXNlOjEsSW52YWxpZEFjdGl2YXRlVG9rZW46MSxJbnZhbGlkUmVzZXRUb2tlbjoxLE1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGg6MSxTYXZlUHJpbWFyeUtleUVycm9yOjF9fSk7XHJcbn1cclxuIiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8TGFuZ3VhZ2VSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTGFuZ3VhZ2VGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTGFuZ3VhZ2VTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgTGFuZ3VhZ2VGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxMYW5ndWFnZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLkxhbmd1YWdlXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIExhbmd1YWdlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTGFuZ3VhZ2VTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW0xhbmd1YWdlUm93LkZpZWxkcy5MYW5ndWFnZU5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Um9sZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSb2xlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUm9sZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJvbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUm9sZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUb29sYmFyQnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IHN1cGVyLmdldFRvb2xiYXJCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5FZGl0QnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcGVybWlzc2lvbnMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS1sb2NrIHRleHQtZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUm9sZVBlcm1pc3Npb25EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlSUQ6IHRoaXMuZW50aXR5LlJvbGVJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZW50aXR5LlJvbGVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbihcImVkaXQtcGVybWlzc2lvbnMtYnV0dG9uXCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Um9sZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlJvbGVcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUm9sZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJvbGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSb2xlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtSb2xlUm93LkZpZWxkcy5Sb2xlTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZVBlcm1pc3Npb25EaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8Um9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25DaGVja0VkaXRvcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0OiBSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXcgUGVybWlzc2lvbkNoZWNrRWRpdG9yKHRoaXMuYnlJZCgnUGVybWlzc2lvbnMnKSwge1xyXG4gICAgICAgICAgICAgICAgc2hvd1Jldm9rZTogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBSb2xlUGVybWlzc2lvblNlcnZpY2UuTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBSb2xlSUQ6IHRoaXMub3B0aW9ucy5yb2xlSUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSA9IHJlc3BvbnNlLkVudGl0aWVzLm1hcCh4ID0+ICg8VXNlclBlcm1pc3Npb25Sb3c+eyBQZXJtaXNzaW9uS2V5OiB4IH0pKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLmltcGxpY2l0UGVybWlzc2lvbnMgPSBRLmdldFJlbW90ZURhdGEoJ0FkbWluaXN0cmF0aW9uLkltcGxpY2l0UGVybWlzc2lvbnMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKCk6IEpRdWVyeVVJLkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLk9rQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb2xlUGVybWlzc2lvblNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVJRDogdGhpcy5vcHRpb25zLnJvbGVJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcm1pc3Npb25zOiB0aGlzLnBlcm1pc3Npb25zLnZhbHVlLm1hcCh4ID0+IHguUGVybWlzc2lvbktleSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gUS5ub3RpZnlTdWNjZXNzKFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5TYXZlU3VjY2VzcycpKSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuRGlhbG9nVGl0bGUnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy50aXRsZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGRpdiBpZD1cIn5fUGVybWlzc2lvbnNcIj48L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgcm9sZUlEPzogbnVtYmVyO1xyXG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwiZGVjbGFyZSB2YXIgVnVlO1xyXG5cclxubmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgU2VyZ2VuUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB2YXIgdm0gPSBuZXcgVnVlKHtcclxuICAgICAgICAgICAgICAgIGVsOiAkKCc8ZGl2Lz4nKS5hcHBlbmRUbyh0aGlzLmVsZW1lbnQpWzBdLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVSTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVDb2RlOiBmdW5jdGlvbiAodGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0YWJsZS5JZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeUVycm9yKFwiSWRlbnRpZmllciBjYW5ub3QgYmUgZW1wdHkhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRhYmxlLk1vZHVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlFcnJvcihcIk1vZHVsZSBjYW5ub3QgYmUgZW1wdHkhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZXJnZW5TZXJ2aWNlLkdlbmVyYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3Rpb25LZXk6IHRoaXMuY29ubmVjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhYmxlOiB0YWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYXRlT3B0aW9uczogdGhpcy5nZW5lcmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhcIkNvZGUgZm9yIHNlbGVjdGVkIHRhYmxlIGlzIGdlbmVyYXRlZC4gWW91J2xsIG5lZWQgdG8gcmVidWlsZCB5b3VyIHByb2plY3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsIHx8ICF2YWwubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0udGFibGVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcmdlblNlcnZpY2UuTGlzdFRhYmxlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdGlvbktleTogdmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB2bS50YWJsZXMgPSByZXNwb25zZS5FbnRpdGllcylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IFEuZ2V0VGVtcGxhdGUoJ0FkbWluaXN0cmF0aW9uLlNlcmdlblBhbmVsJylcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBTZXJnZW5TZXJ2aWNlLkxpc3RDb25uZWN0aW9ucyh7fSwgcmVzcG9uc2UgPT4gdm0uY29ubmVjdGlvbnMgPSByZXNwb25zZS5FbnRpdGllcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVHJhbnNsYXRpb25HcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxUcmFuc2xhdGlvbkl0ZW0sIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJLZXlcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFRyYW5zbGF0aW9uU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFzQ2hhbmdlczogYm9vbGVhbjtcclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIHNvdXJjZUxhbmd1YWdlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7IFxyXG4gICAgICAgIHByaXZhdGUgdGFyZ2V0TGFuZ3VhZ2U6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBwcml2YXRlIHRhcmdldExhbmd1YWdlS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oJ2tleXVwLicgKyB0aGlzLnVuaXF1ZU5hbWUgKyAnIGNoYW5nZS4nICsgdGhpcy51bmlxdWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgJ2lucHV0LmN1c3RvbS10ZXh0JywgZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBRLnRyaW1Ub051bGwoJChlLnRhcmdldCkudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5nZXRJdGVtQnlJZCgkKGUudGFyZ2V0KS5kYXRhKCdrZXknKSkuQ3VzdG9tVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgbGV0IGRvbmU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3NvdXJjZS10ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlNvdXJjZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uU291cmNlVGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCd0YXJnZXQtdGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlRhcmdldFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uVGFyZ2V0VGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW107XHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7IGZpZWxkOiAnS2V5Jywgd2lkdGg6IDMwMCwgc29ydGFibGU6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnU291cmNlVGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzb3VyY2UtdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGN0eC52YWx1ZSB8fCAnJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ0N1c3RvbVRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IFEub3V0ZXJIdG1sKCQoJzxpbnB1dC8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2N1c3RvbS10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBjdHgudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAndGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEta2V5JywgY3R4Lml0ZW0uS2V5KSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdUYXJnZXRUZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3RhcmdldC10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChjdHgudmFsdWUgfHwgJycpKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG9wdDogU2VyZW5pdHkuTG9va3VwRWRpdG9yT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGxvb2t1cEtleTogJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZSA9IFNlcmVuaXR5LldpZGdldC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWwgPT4gZWwuYXBwZW5kVG8odGhpcy50b29sYmFyLmVsZW1lbnQpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJy0tLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlNvdXJjZUxhbmd1YWdlJykgKyAnIC0tLScpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlID0gU2VyZW5pdHkuV2lkZ2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3IsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbCA9PiBlbC5hcHBlbmRUbyh0aGlzLnRvb2xiYXIuZWxlbWVudCkuYXR0cigncGxhY2Vob2xkZXInLCAnLS0tICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uVGFyZ2V0TGFuZ3VhZ2UnKSArICcgLS0tJyksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlQ2hhbmdlcyhsYW5ndWFnZTogc3RyaW5nKTogUHJvbWlzZUxpa2U8YW55PiB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uc1tpdGVtLktleV0gPSBpdGVtLkN1c3RvbVRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoVHJhbnNsYXRpb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBUYXJnZXRMYW5ndWFnZUlEOiBsYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIFRyYW5zbGF0aW9uczogdHJhbnNsYXRpb25zXHJcbiAgICAgICAgICAgIH0pKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSBRLnRyaW1Ub051bGwobGFuZ3VhZ2UpIHx8ICdpbnZhcmlhbnQnO1xyXG4gICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKCdVc2VyIHRyYW5zbGF0aW9ucyBpbiBcIicgKyBsYW5ndWFnZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJ1wiIGxhbmd1YWdlIGFyZSBzYXZlZCB0byBcInVzZXIudGV4dHMuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgKyAnLmpzb25cIiAnICsgJ2ZpbGUgdW5kZXIgXCJ+L0FwcF9EYXRhL3RleHRzL1wiJywgJycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy52aWV3LnBhcmFtcztcclxuICAgICAgICAgICAgcmVxdWVzdC5Tb3VyY2VMYW5ndWFnZUlEID0gdGhpcy5zb3VyY2VMYW5ndWFnZS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZUtleSA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2UudmFsdWUgfHwgJyc7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuVGFyZ2V0TGFuZ3VhZ2VJRCA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIub25WaWV3U3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKTogU2VyZW5pdHkuVG9vbEJ1dHRvbltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5TYXZlQ2hhbmdlc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogZSA9PiB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhcHBseS1jaGFuZ2VzLWJ1dHRvbidcclxuICAgICAgICAgICAgfV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlUXVpY2tTZWFyY2hJbnB1dCgpIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAoZmllbGQsIHNlYXJjaFRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogVHJhbnNsYXRpb25JdGVtKSB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNkID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcztcclxuICAgICAgICAgICAgdmFyIHNlYXJjaGluZyA9IHNkKHRoaXMuc2VhcmNoVGV4dCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1hdGNoKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0cilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoaW5nKSA+PSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUS5pc0VtcHR5T3JOdWxsKHNlYXJjaGluZykgfHwgbWF0Y2goaXRlbS5LZXkpIHx8IG1hdGNoKGl0ZW0uU291cmNlVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoKGl0ZW0uVGFyZ2V0VGV4dCkgfHwgbWF0Y2goaXRlbS5DdXN0b21UZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1c2VQYWdlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8VXNlclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBVc2VyRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SXNBY3RpdmVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaXNBY3RpdmVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBVc2VyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVXNlclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBVc2VyRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUubGVuZ3RoIDwgNylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDcgY2hhcmFjdGVycyFcIjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmRDb25maXJtLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlICE9IHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0udmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiVGhlIHBhc3N3b3JkcyBlbnRlcmVkIGRvZXNuJ3QgbWF0Y2ghXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRvb2xiYXJCdXR0b25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBidXR0b25zID0gc3VwZXIuZ2V0VG9vbGJhckJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdTaXRlLlVzZXJEaWFsb2cuRWRpdFJvbGVzQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcm9sZXMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS11c2VycyB0ZXh0LWJsdWUnLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlclJvbGVEaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySUQ6IHRoaXMuZW50aXR5LlVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuZW50aXR5LlVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdTaXRlLlVzZXJEaWFsb2cuRWRpdFBlcm1pc3Npb25zQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcGVybWlzc2lvbnMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS1sb2NrIHRleHQtZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlclBlcm1pc3Npb25EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySUQ6IHRoaXMuZW50aXR5LlVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuZW50aXR5LlVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbignZWRpdC1yb2xlcy1idXR0b24nKS50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCB0aGlzLmlzTmV3T3JEZWxldGVkKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbihcImVkaXQtcGVybWlzc2lvbnMtYnV0dG9uXCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhZnRlckxvYWRFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFmdGVyTG9hZEVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhlc2UgZmllbGRzIGFyZSBvbmx5IHJlcXVpcmVkIGluIG5ldyByZWNvcmQgbW9kZVxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmQuZWxlbWVudC50b2dnbGVDbGFzcygncmVxdWlyZWQnLCB0aGlzLmlzTmV3KCkpXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmZpZWxkJykuZmluZCgnc3VwJykudG9nZ2xlKHRoaXMuaXNOZXcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0uZWxlbWVudC50b2dnbGVDbGFzcygncmVxdWlyZWQnLCB0aGlzLmlzTmV3KCkpXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmZpZWxkJykuZmluZCgnc3VwJykudG9nZ2xlKHRoaXMuaXNOZXcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFVzZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5Vc2VyXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFVzZXJEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJc0FjdGl2ZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pc0FjdGl2ZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVzZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBVc2VyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtVc2VyUm93LkZpZWxkcy5Vc2VybmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEd5bUFjdGlvbi5BdXRob3JpemF0aW9uIHtcclxuICAgIGV4cG9ydCBkZWNsYXJlIGxldCB1c2VyRGVmaW5pdGlvbjogU2NyaXB0VXNlckRlZmluaXRpb247XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1dGhvcml6YXRpb24sICd1c2VyRGVmaW5pdGlvbicsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0UmVtb3RlRGF0YSgnVXNlckRhdGEnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdWQgPSB1c2VyRGVmaW5pdGlvbjtcclxuICAgICAgICByZXR1cm4gdWQuVXNlcm5hbWUgPT09ICdhZG1pbicgfHwgISF1ZC5QZXJtaXNzaW9uc1twZXJtaXNzaW9uS2V5XTtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKFtTZXJlbml0eS5JR2V0RWRpdFZhbHVlLCBTZXJlbml0eS5JU2V0RWRpdFZhbHVlXSlcclxuICAgIGV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5EYXRhR3JpZDxQZXJtaXNzaW9uQ2hlY2tJdGVtLCBQZXJtaXNzaW9uQ2hlY2tFZGl0b3JPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJLZXlcIjsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIGJ5UGFyZW50S2V5OiBRLkdyb3VwaW5nPFBlcm1pc3Npb25DaGVja0l0ZW0+O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSwgb3B0OiBQZXJtaXNzaW9uQ2hlY2tFZGl0b3JPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0KTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aXRsZUJ5S2V5OiBRLkRpY3Rpb25hcnk8c3RyaW5nPiA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgcGVybWlzc2lvbktleXMgPSB0aGlzLmdldFNvcnRlZEdyb3VwQW5kUGVybWlzc2lvbktleXModGl0bGVCeUtleSk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHBlcm1pc3Npb25LZXlzLm1hcChrZXkgPT4gPFBlcm1pc3Npb25DaGVja0l0ZW0+e1xyXG4gICAgICAgICAgICAgICAgS2V5OiBrZXksXHJcbiAgICAgICAgICAgICAgICBQYXJlbnRLZXk6IHRoaXMuZ2V0UGFyZW50S2V5KGtleSksXHJcbiAgICAgICAgICAgICAgICBUaXRsZTogdGl0bGVCeUtleVtrZXldLFxyXG4gICAgICAgICAgICAgICAgR3JhbnRSZXZva2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBJc0dyb3VwOiBrZXkuY2hhckF0KGtleS5sZW5ndGggLSAxKSA9PT0gJzonXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieVBhcmVudEtleSA9IFEudG9Hcm91cGluZyhpdGVtcywgeCA9PiB4LlBhcmVudEtleSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXMoaXRlbXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRJdGVtR3JhbnRSZXZva2VDbGFzcyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtLCBncmFudDogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGlmICghaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKChpdGVtLkdyYW50UmV2b2tlID09PSBncmFudCkgPyAnIGNoZWNrZWQnIDogJycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZGVzYyA9IHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGxldCBncmFudGVkID0gZGVzYy5maWx0ZXIoeCA9PiB4LkdyYW50UmV2b2tlID09PSBncmFudCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWdyYW50ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkZXNjLmxlbmd0aCA9PT0gZ3JhbnRlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnY2hlY2tlZCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAnY2hlY2tlZCBwYXJ0aWFsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcm9sZU9ySW1wbGljaXQoa2V5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb2xlUGVybWlzc2lvbnNba2V5XSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgayBvZiBPYmplY3Qua2V5cyh0aGlzLl9yb2xlUGVybWlzc2lvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba107XHJcbiAgICAgICAgICAgICAgICBpZiAoZCAmJiBkW2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgb2YgT2JqZWN0LmtleXModGhpcy5faW1wbGljaXRQZXJtaXNzaW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy52aWV3LmdldEl0ZW1CeUlkKGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5HcmFudFJldm9rZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkICYmIGRba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0SXRlbUVmZmVjdGl2ZUNsYXNzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0pOiBzdHJpbmcge1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0uSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlc2MgPSB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYW50Q291bnQgPSBRLmNvdW50KGRlc2MsIHggPT4geC5HcmFudFJldm9rZSA9PT0gdHJ1ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh4LkdyYW50UmV2b2tlID09IG51bGwgJiYgdGhpcy5yb2xlT3JJbXBsaWNpdCh4LktleSkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JhbnRDb3VudCA9PT0gZGVzYy5sZW5ndGggfHwgZGVzYy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2FsbG93JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JhbnRDb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZGVueSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdwYXJ0aWFsJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGdyYW50ZWQgPSBpdGVtLkdyYW50UmV2b2tlID09PSB0cnVlIHx8XHJcbiAgICAgICAgICAgICAgICAoaXRlbS5HcmFudFJldm9rZSA9PSBudWxsICYmIHRoaXMucm9sZU9ySW1wbGljaXQoaXRlbS5LZXkpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoZ3JhbnRlZCA/ICcgYWxsb3cnIDogJyBkZW55Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1ucygpOiBTbGljay5Db2x1bW5bXSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5zOiBTbGljay5Db2x1bW5bXSA9IFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuUGVybWlzc2lvbicpLFxyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdUaXRsZScsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IFNlcmVuaXR5LlNsaWNrRm9ybWF0dGluZy50cmVlVG9nZ2xlKCgpID0+IHRoaXMudmlldywgeCA9PiB4LktleSwgY3R4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrbGFzcyA9IHRoaXMuZ2V0SXRlbUVmZmVjdGl2ZUNsYXNzKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJlZmZlY3RpdmUtcGVybWlzc2lvbiAnICsga2xhc3MgKyAnXCI+JyArIFEuaHRtbEVuY29kZShjdHgudmFsdWUpICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDk1LFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5HcmFudCcpLCBmaWVsZDogJ0dyYW50JyxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbTEgPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3MxID0gdGhpcy5nZXRJdGVtR3JhbnRSZXZva2VDbGFzcyhpdGVtMSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9J2NoZWNrLWJveCBncmFudCBuby1mbG9hdCBcIiArIGtsYXNzMSArIFwiJz48L3NwYW4+XCI7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1LFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyQ3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInXHJcbiAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93UmV2b2tlKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5SZXZva2UnKSwgZmllbGQ6ICdSZXZva2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0yID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrbGFzczIgPSB0aGlzLmdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW0yLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJjaGVjay1ib3ggcmV2b2tlIG5vLWZsb2F0ICcgKyBrbGFzczIgKyAnXCI+PC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FsaWduLWNlbnRlcidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRJdGVtcyhpdGVtczogUGVybWlzc2lvbkNoZWNrSXRlbVtdKTogdm9pZCB7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci5zZXRJbmRlbnRzKGl0ZW1zLCB4ID0+IHguS2V5LCB4ID0+IHguUGFyZW50S2V5LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyhpdGVtcywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3U3VibWl0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKCFzdXBlci5vblZpZXdGaWx0ZXIoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFTZXJlbml0eS5TbGlja1RyZWVIZWxwZXIuZmlsdGVyQnlJZChpdGVtLCB0aGlzLnZpZXcsIHggPT4geC5QYXJlbnRLZXkpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2hDb250YWlucyhpdGVtKSB8fCBpdGVtLklzR3JvdXAgJiYgUS5hbnkodGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCBmYWxzZSksIHggPT4gdGhpcy5tYXRjaENvbnRhaW5zKHgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIG1hdGNoQ29udGFpbnMoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhpdGVtLlRpdGxlIHx8ICcnKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hUZXh0KSA+PSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXREZXNjZW5kYW50cyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtLCBleGNsdWRlR3JvdXBzOiBib29sZWFuKTogUGVybWlzc2lvbkNoZWNrSXRlbVtdIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogUGVybWlzc2lvbkNoZWNrSXRlbVtdID0gW107XHJcbiAgICAgICAgICAgIGxldCBzdGFjayA9IFtpdGVtXTtcclxuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBpID0gc3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmJ5UGFyZW50S2V5W2kuS2V5XTtcclxuICAgICAgICAgICAgICAgIGlmICghY2hpbGRyZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4Y2x1ZGVHcm91cHMgfHwgIWNoaWxkLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlLCByb3csIGNlbGwpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBTZXJlbml0eS5TbGlja1RyZWVIZWxwZXIudG9nZ2xlQ2xpY2soZSwgcm93LCBjZWxsLCB0aGlzLnZpZXcsIHggPT4geC5LZXkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGxldCBncmFudCA9IHRhcmdldC5oYXNDbGFzcygnZ3JhbnQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChncmFudCB8fCB0YXJnZXQuaGFzQ2xhc3MoJ3Jldm9rZScpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1BdChyb3cpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrZWRPclBhcnRpYWwgPSB0YXJnZXQuaGFzQ2xhc3MoJ2NoZWNrZWQnKSB8fCB0YXJnZXQuaGFzQ2xhc3MoJ3BhcnRpYWwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZE9yUGFydGlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYW50ID0gZ3JhbnQgIT09IGNoZWNrZWRPclBhcnRpYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGQgb2YgdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLkdyYW50UmV2b2tlID0gZ3JhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uR3JhbnRSZXZva2UgPSBncmFudDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWNrR3JpZC5pbnZhbGlkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0UGFyZW50S2V5KGtleSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGlmIChrZXkuY2hhckF0KGtleS5sZW5ndGggLSAxKSA9PT0gJzonKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBrZXkuc3Vic3RyKDAsIGtleS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGlkeCA9IGtleS5sYXN0SW5kZXhPZignOicpO1xyXG4gICAgICAgICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBrZXkuc3Vic3RyKDAsIGlkeCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKTogU2VyZW5pdHkuVG9vbEJ1dHRvbltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG4gICAgICAgICAgICBTZXJlbml0eS5HcmlkVXRpbHMuYWRkUXVpY2tTZWFyY2hJbnB1dEN1c3RvbSh0aGlzLnRvb2xiYXIuZWxlbWVudCwgKGZpZWxkLCB0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKFEudHJpbVRvTnVsbCh0ZXh0KSB8fCAnJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRTb3J0ZWRHcm91cEFuZFBlcm1pc3Npb25LZXlzKHRpdGxlQnlLZXk6IFEuRGljdGlvbmFyeTxzdHJpbmc+KTogc3RyaW5nW10ge1xyXG4gICAgICAgICAgICBsZXQga2V5cyA9IDxzdHJpbmdbXT5RLmdldFJlbW90ZURhdGEoJ0FkbWluaXN0cmF0aW9uLlBlcm1pc3Npb25LZXlzJykuRW50aXRpZXM7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZVdpdGhHcm91cCA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrIG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzID0gaztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocy5jaGFyQXQocy5sZW5ndGggLSAxKSA9PSAnOicpIHtcclxuICAgICAgICAgICAgICAgICAgICBzID0gcy5zdWJzdHIoMCwgcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aXRsZUJ5S2V5W3NdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGVCeUtleVtzXSA9IFEuY29hbGVzY2UoUS50cnlHZXRUZXh0KCdQZXJtaXNzaW9uLicgKyBzKSwgcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFydHMgPSBzLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdXAgPSAnJztcclxuICAgICAgICAgICAgICAgIGxldCBncm91cFRpdGxlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwID0gZ3JvdXAgKyBwYXJ0c1tpXSArICc6JztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHh0ID0gUS50cnlHZXRUZXh0KCdQZXJtaXNzaW9uLicgKyBncm91cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IHBhcnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZUJ5S2V5W2dyb3VwXSA9IHR4dDtcclxuICAgICAgICAgICAgICAgICAgICBncm91cFRpdGxlID0gZ3JvdXBUaXRsZSArIHRpdGxlQnlLZXlbZ3JvdXBdICsgJzonO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlV2l0aEdyb3VwW2dyb3VwXSA9IGdyb3VwVGl0bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGVXaXRoR3JvdXBbc10gPSBncm91cFRpdGxlICsgdGl0bGVCeUtleVtzXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHRpdGxlQnlLZXkpO1xyXG4gICAgICAgICAgICBrZXlzID0ga2V5cy5zb3J0KCh4LCB5KSA9PiBRLnR1cmtpc2hMb2NhbGVDb21wYXJlKHRpdGxlV2l0aEdyb3VwW3hdLCB0aXRsZVdpdGhHcm91cFt5XSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgdmFsdWUoKTogVXNlclBlcm1pc3Npb25Sb3dbXSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBVc2VyUGVybWlzc2lvblJvd1tdID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMudmlldy5nZXRJdGVtcygpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5HcmFudFJldm9rZSAhPSBudWxsICYmIGl0ZW0uS2V5LmNoYXJBdChpdGVtLktleS5sZW5ndGggLSAxKSAhPSAnOicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7IFBlcm1pc3Npb25LZXk6IGl0ZW0uS2V5LCBHcmFudGVkOiBpdGVtLkdyYW50UmV2b2tlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHZhbHVlKHZhbHVlOiBVc2VyUGVybWlzc2lvblJvd1tdKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMudmlldy5nZXRJdGVtcygpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLkdyYW50UmV2b2tlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHJvdyBvZiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gdGhpcy52aWV3LmdldEl0ZW1CeUlkKHJvdy5QZXJtaXNzaW9uS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByLkdyYW50UmV2b2tlID0gUS5jb2FsZXNjZShyb3cuR3JhbnRlZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKHRoaXMuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9yb2xlUGVybWlzc2lvbnM6IFEuRGljdGlvbmFyeTxib29sZWFuPiA9IHt9O1xyXG5cclxuICAgICAgICBnZXQgcm9sZVBlcm1pc3Npb25zKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3JvbGVQZXJtaXNzaW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgcm9sZVBlcm1pc3Npb25zKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yb2xlUGVybWlzc2lvbnMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayBvZiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvbGVQZXJtaXNzaW9uc1trXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5nZXRJdGVtcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2ltcGxpY2l0UGVybWlzc2lvbnM6IFEuRGljdGlvbmFyeTxRLkRpY3Rpb25hcnk8Ym9vbGVhbj4+ID0ge307XHJcblxyXG4gICAgICAgIHNldCBpbXBsaWNpdFBlcm1pc3Npb25zKHZhbHVlOiBRLkRpY3Rpb25hcnk8c3RyaW5nW10+KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayBvZiBPYmplY3Qua2V5cyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXSB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IHZhbHVlW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgb2YgbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba11bc10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnMge1xyXG4gICAgICAgIHNob3dSZXZva2U/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkNoZWNrSXRlbSB7XHJcbiAgICAgICAgUGFyZW50S2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIEtleT86IHN0cmluZztcclxuICAgICAgICBUaXRsZT86IHN0cmluZztcclxuICAgICAgICBJc0dyb3VwPzogYm9vbGVhbjtcclxuICAgICAgICBHcmFudFJldm9rZT86IGJvb2xlYW47XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUGVybWlzc2lvbkRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbkNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdQZXJtaXNzaW9ucycpLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93UmV2b2tlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuTGlzdFJvbGVQZXJtaXNzaW9ucyh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMucm9sZVBlcm1pc3Npb25zID0gcmVzcG9uc2UuRW50aXRpZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5pbXBsaWNpdFBlcm1pc3Npb25zID0gUS5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5JbXBsaWNpdFBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpOiBKUXVlcnlVSS5EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9uczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlNhdmVTdWNjZXNzJykpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5EaWFsb2dUaXRsZScpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnVzZXJuYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGlkPVwifl9QZXJtaXNzaW9uc1wiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICB1c2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUNoZWNrRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuQ2hlY2tUcmVlRWRpdG9yPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55PiwgYW55PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkaXY6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihkaXYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCkge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsIChmaWVsZCwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyh0ZXh0IHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRyZWVJdGVtcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJvbGVSb3cuZ2V0TG9va3VwKCkuaXRlbXMubWFwKHJvbGUgPT4gPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55Pj57XHJcbiAgICAgICAgICAgICAgICBpZDogcm9sZS5Sb2xlSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJvbGUuUm9sZU5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSAmJlxyXG4gICAgICAgICAgICAgICAgKFEuaXNFbXB0eU9yTnVsbCh0aGlzLnNlYXJjaFRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhpdGVtLnRleHQgfHwgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hUZXh0KSA+PSAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUm9sZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxVc2VyUm9sZURpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUm9sZUNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFVzZXJSb2xlRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBSb2xlQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdSb2xlcycpKTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJSb2xlU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXMubWFwKHggPT4geC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgdmFyIG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW3tcclxuICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBRLnNlcnZpY2VSZXF1ZXN0KCdBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9VcGRhdGUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9sZXM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUubWFwKHggPT4gcGFyc2VJbnQoeCwgMTApKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlVzZXJSb2xlRGlhbG9nLlNhdmVTdWNjZXNzJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlVzZXJSb2xlRGlhbG9nLkRpYWxvZ1RpdGxlJyksIHRoaXMub3B0aW9ucy51c2VybmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxkaXYgaWQ9J35fUm9sZXMnPjwvZGl2PlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgdXNlcklEOiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgR3ltQWN0aW9uLkF1bGEge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEF1bGFEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8QXVsYVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBBdWxhRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBBdWxhUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQXVsYVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQXVsYVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEF1bGFTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEF1bGFSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQXVsYVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBBdWxhUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQXVsYUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBHeW1BY3Rpb24uQXVsYSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQXVsYUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEF1bGFSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ0F1bGEuQXVsYSc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEF1bGFEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEF1bGFSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQXVsYVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEF1bGFSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBBdWxhU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25zID0gc3VwZXIuZ2V0QnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKEd5bUFjdGlvbi5Db21tb24uRXhjZWxFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpLFxyXG4gICAgICAgICAgICAgICAgc2VydmljZTogJ0F1bGEvQXVsYS9MaXN0RXhjZWwnLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiB0cnVlXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChHeW1BY3Rpb24uQ29tbW9uLlBkZkV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IHRoaXMub25WaWV3U3VibWl0KClcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBHeW1BY3Rpb24uQXVsYUluc3RydXRvciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQXVsYUluc3RydXRvckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxBdWxhSW5zdHJ1dG9yUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEF1bGFJbnN0cnV0b3JGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEF1bGFJbnN0cnV0b3JSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBBdWxhSW5zdHJ1dG9yUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBBdWxhSW5zdHJ1dG9yUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQXVsYUluc3RydXRvclNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQXVsYUluc3RydXRvclJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBBdWxhSW5zdHJ1dG9yUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEF1bGFJbnN0cnV0b3JSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBBdWxhSW5zdHJ1dG9yRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEd5bUFjdGlvbi5BdWxhSW5zdHJ1dG9yIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBBdWxhSW5zdHJ1dG9yR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8QXVsYUluc3RydXRvclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnQXVsYUluc3RydXRvci5BdWxhSW5zdHJ1dG9yJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQXVsYUluc3RydXRvckRpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQXVsYUluc3RydXRvclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBBdWxhSW5zdHJ1dG9yUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQXVsYUluc3RydXRvclJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEF1bGFJbnN0cnV0b3JTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSBzdXBlci5nZXRCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goR3ltQWN0aW9uLkNvbW1vbi5FeGNlbEV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IHRoaXMub25WaWV3U3VibWl0KCksXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiAnQXVsYUluc3RydXRvci9BdWxhSW5zdHJ1dG9yL0xpc3RFeGNlbCcsXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IHRydWVcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKEd5bUFjdGlvbi5Db21tb24uUGRmRXhwb3J0SGVscGVyLmNyZWF0ZVRvb2xCdXR0b24oe1xyXG4gICAgICAgICAgICAgICAgZ3JpZDogdGhpcyxcclxuICAgICAgICAgICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gdGhpcy5vblZpZXdTdWJtaXQoKVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEd5bUFjdGlvbi5BdmFsaWFjYW9GaXNpY2Ege1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEF2YWxpYWNhb0Zpc2ljYURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxBdmFsaWFjYW9GaXNpY2FSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQXZhbGlhY2FvRmlzaWNhRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBBdmFsaWFjYW9GaXNpY2FSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBBdmFsaWFjYW9GaXNpY2FSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEF2YWxpYWNhb0Zpc2ljYVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEF2YWxpYWNhb0Zpc2ljYVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQXZhbGlhY2FvRmlzaWNhUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEF2YWxpYWNhb0Zpc2ljYVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBBdmFsaWFjYW9GaXNpY2FSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBBdmFsaWFjYW9GaXNpY2FGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgR3ltQWN0aW9uLkF2YWxpYWNhb0Zpc2ljYSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQXZhbGlhY2FvRmlzaWNhR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8QXZhbGlhY2FvRmlzaWNhUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdBdmFsaWFjYW9GaXNpY2EuQXZhbGlhY2FvRmlzaWNhJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQXZhbGlhY2FvRmlzaWNhRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBBdmFsaWFjYW9GaXNpY2FSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQXZhbGlhY2FvRmlzaWNhUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQXZhbGlhY2FvRmlzaWNhUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQXZhbGlhY2FvRmlzaWNhU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25zID0gc3VwZXIuZ2V0QnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKEd5bUFjdGlvbi5Db21tb24uRXhjZWxFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpLFxyXG4gICAgICAgICAgICAgICAgc2VydmljZTogJ0F2YWxpYWNhb0Zpc2ljYS9BdmFsaWFjYW9GaXNpY2EvTGlzdEV4Y2VsJyxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogdHJ1ZVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goR3ltQWN0aW9uLkNvbW1vbi5QZGZFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgR3ltQWN0aW9uLkNsaWVudGUge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENsaWVudGVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Q2xpZW50ZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBDbGllbnRlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDbGllbnRlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ2xpZW50ZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQ2xpZW50ZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENsaWVudGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIENsaWVudGVSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2xpZW50ZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDbGllbnRlUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQ2xpZW50ZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBHeW1BY3Rpb24uQ2xpZW50ZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2xpZW50ZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPENsaWVudGVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ0NsaWVudGUuQ2xpZW50ZSc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIENsaWVudGVEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIENsaWVudGVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2xpZW50ZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENsaWVudGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDbGllbnRlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRCdXR0b25zKCkge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHN1cGVyLmdldEJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChHeW1BY3Rpb24uQ29tbW9uLkV4Y2VsRXhwb3J0SGVscGVyLmNyZWF0ZVRvb2xCdXR0b24oe1xyXG4gICAgICAgICAgICAgICAgZ3JpZDogdGhpcyxcclxuICAgICAgICAgICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gdGhpcy5vblZpZXdTdWJtaXQoKSxcclxuICAgICAgICAgICAgICAgIHNlcnZpY2U6ICdDbGllbnRlL0NsaWVudGUvTGlzdEV4Y2VsJyxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogdHJ1ZVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goR3ltQWN0aW9uLkNvbW1vbi5QZGZFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgR3ltQWN0aW9uLkNsaWVudGVQbGFub0F1bGEge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENsaWVudGVQbGFub0F1bGFEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Q2xpZW50ZVBsYW5vQXVsYVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBDbGllbnRlUGxhbm9BdWxhRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDbGllbnRlUGxhbm9BdWxhUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ2xpZW50ZVBsYW5vQXVsYVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENsaWVudGVQbGFub0F1bGFTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIENsaWVudGVQbGFub0F1bGFSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2xpZW50ZVBsYW5vQXVsYVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDbGllbnRlUGxhbm9BdWxhUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQ2xpZW50ZVBsYW5vQXVsYUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBHeW1BY3Rpb24uQ2xpZW50ZVBsYW5vQXVsYSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2xpZW50ZVBsYW5vQXVsYUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPENsaWVudGVQbGFub0F1bGFSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ0NsaWVudGVQbGFub0F1bGEuQ2xpZW50ZVBsYW5vQXVsYSc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIENsaWVudGVQbGFub0F1bGFEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIENsaWVudGVQbGFub0F1bGFSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2xpZW50ZVBsYW5vQXVsYVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENsaWVudGVQbGFub0F1bGFSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDbGllbnRlUGxhbm9BdWxhU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25zID0gc3VwZXIuZ2V0QnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKEd5bUFjdGlvbi5Db21tb24uRXhjZWxFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpLFxyXG4gICAgICAgICAgICAgICAgc2VydmljZTogJ0NsaWVudGVQbGFub0F1bGEvQ2xpZW50ZVBsYW5vQXVsYS9MaXN0RXhjZWwnLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiB0cnVlXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChHeW1BY3Rpb24uQ29tbW9uLlBkZkV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IHRoaXMub25WaWV3U3VibWl0KClcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEd5bUFjdGlvbi5MYW5ndWFnZUxpc3Qge1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQ6IHN0cmluZ1tdW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBrIG9mIEFkbWluaXN0cmF0aW9uLkxhbmd1YWdlUm93LmdldExvb2t1cCgpLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChrLkxhbmd1YWdlSWQgIT09ICdlbicpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFtrLklkLnRvU3RyaW5nKCksIGsuTGFuZ3VhZ2VOYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uL0hlbHBlcnMvTGFuZ3VhZ2VMaXN0LnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBHeW1BY3Rpb24uU2NyaXB0SW5pdGlhbGl6YXRpb24ge1xyXG4gICAgUS5Db25maWcucmVzcG9uc2l2ZURpYWxvZ3MgPSB0cnVlO1xyXG4gICAgUS5Db25maWcucm9vdE5hbWVzcGFjZXMucHVzaCgnR3ltQWN0aW9uJyk7XHJcbiAgICBTZXJlbml0eS5FbnRpdHlEaWFsb2cuZGVmYXVsdExhbmd1YWdlTGlzdCA9IExhbmd1YWdlTGlzdC5nZXRWYWx1ZTtcclxuXHJcbiAgICBpZiAoJC5mblsnY29sb3Jib3gnXSkge1xyXG4gICAgICAgICQuZm5bJ2NvbG9yYm94J10uc2V0dGluZ3MubWF4V2lkdGggPSBcIjk1JVwiO1xyXG4gICAgICAgICQuZm5bJ2NvbG9yYm94J10uc2V0dGluZ3MubWF4SGVpZ2h0ID0gXCI5NSVcIjtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub25lcnJvciA9IFEuRXJyb3JIYW5kbGluZy5ydW50aW1lRXJyb3JIYW5kbGVyO1xyXG59IiwibmFtZXNwYWNlIEd5bUFjdGlvbiB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEJhc2ljUHJvZ3Jlc3NEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8YW55PiB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdQcm9ncmVzc0JhcicpLnByb2dyZXNzYmFyKHtcclxuICAgICAgICAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2U6IChlLCB2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ieUlkKCdQcm9ncmVzc0xhYmVsJykudGV4dCh0aGlzLnZhbHVlICsgJyAvICcgKyB0aGlzLm1heCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNhbmNlbGxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgcHVibGljIGdldCBtYXgoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnlJZCgnUHJvZ3Jlc3NCYXInKS5wcm9ncmVzc2JhcigpLnByb2dyZXNzYmFyKCdvcHRpb24nLCAnbWF4Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IG1heCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnUHJvZ3Jlc3NCYXInKS5wcm9ncmVzc2JhcigpLnByb2dyZXNzYmFyKCdvcHRpb24nLCAnbWF4JywgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB2YWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ieUlkKCdQcm9ncmVzc0JhcicpLnByb2dyZXNzYmFyKCd2YWx1ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnUHJvZ3Jlc3NCYXInKS5wcm9ncmVzc2JhcigpLnByb2dyZXNzYmFyKCd2YWx1ZScsIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgdGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5kaWFsb2coKS5kaWFsb2coJ29wdGlvbicsICd0aXRsZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaWFsb2coKS5kaWFsb2coJ29wdGlvbicsICd0aXRsZScsIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBjYW5jZWxUaXRsZTogc3RyaW5nO1xyXG5cclxuICAgICAgICBnZXREaWFsb2dPcHRpb25zKCkge1xyXG4gICAgICAgICAgICB2YXIgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLnRleHQoJ1NpdGUuQmFzaWNQcm9ncmVzc0RpYWxvZy5QbGVhc2VXYWl0Jyk7XHJcbiAgICAgICAgICAgIG9wdC53aWR0aCA9IDYwMDtcclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsb3Nlc3QoJy51aS1kaWFsb2cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnLnVpLWRpYWxvZy1idXR0b25wYW5lIC51aS1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCdvcGFjaXR5JywgJzAuNScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlhbG9nKCdvcHRpb24nLCAndGl0bGUnLCBRLnRyaW1Ub051bGwodGhpcy5jYW5jZWxUaXRsZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS50ZXh0KCdTaXRlLkJhc2ljUHJvZ3Jlc3NEaWFsb2cuQ2FuY2VsVGl0bGUnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluaXREaWFsb2coKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmluaXREaWFsb2coKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsb3Nlc3QoJy51aS1kaWFsb2cnKS5maW5kKCcudWktZGlhbG9nLXRpdGxlYmFyLWNsb3NlJykuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J3MtRGlhbG9nQ29udGVudCBzLUJhc2ljUHJvZ3Jlc3NEaWFsb2dDb250ZW50Jz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGlkPSd+X1N0YXR1c1RleHQnIGNsYXNzPSdzdGF0dXMtdGV4dCcgPjwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjxkaXYgaWQ9J35fUHJvZ3Jlc3NCYXInIGNsYXNzPSdwcm9ncmVzcy1iYXInPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGlkPSd+X1Byb2dyZXNzTGFiZWwnIGNsYXNzPSdwcm9ncmVzcy1sYWJlbCcgPjwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgIFwiPC9kaXY+XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQ29tbW9uIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQnVsa1NlcnZpY2VBY3Rpb24ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQga2V5czogc3RyaW5nW107XHJcbiAgICAgICAgcHJvdGVjdGVkIHF1ZXVlOiBzdHJpbmdbXTtcclxuICAgICAgICBwcm90ZWN0ZWQgcXVldWVJbmRleDogbnVtYmVyO1xyXG4gICAgICAgIHByb3RlY3RlZCBwcm9ncmVzc0RpYWxvZzogQmFzaWNQcm9ncmVzc0RpYWxvZztcclxuICAgICAgICBwcm90ZWN0ZWQgcGVuZGluZ1JlcXVlc3RzOiBudW1iZXI7XHJcbiAgICAgICAgcHJvdGVjdGVkIGNvbXBsZXRlZFJlcXVlc3RzOiBudW1iZXI7XHJcbiAgICAgICAgcHJvdGVjdGVkIGVycm9yQnlLZXk6IFEuRGljdGlvbmFyeTxTZXJlbml0eS5TZXJ2aWNlRXJyb3I+O1xyXG4gICAgICAgIHByaXZhdGUgc3VjY2Vzc0NvdW50O1xyXG4gICAgICAgIHByaXZhdGUgZXJyb3JDb3VudDtcclxuICAgICAgICBwdWJsaWMgZG9uZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVByb2dyZXNzRGlhbG9nKCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzRGlhbG9nID0gbmV3IEJhc2ljUHJvZ3Jlc3NEaWFsb2coKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0RpYWxvZy5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NEaWFsb2cubWF4ID0gdGhpcy5rZXlzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0RpYWxvZy52YWx1ZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29uZmlybWF0aW9uRm9ybWF0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdTaXRlLkJ1bGtTZXJ2aWNlQWN0aW9uLkNvbmZpcm1hdGlvbkZvcm1hdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbmZpcm1hdGlvbk1lc3NhZ2UodGFyZ2V0Q291bnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZm9ybWF0KHRoaXMuZ2V0Q29uZmlybWF0aW9uRm9ybWF0KCksIHRhcmdldENvdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjb25maXJtKHRhcmdldENvdW50LCBhY3Rpb24pIHtcclxuICAgICAgICAgICAgUS5jb25maXJtKHRoaXMuZ2V0Q29uZmlybWF0aW9uTWVzc2FnZSh0YXJnZXRDb3VudCksIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Tm90aGluZ1RvUHJvY2Vzc01lc3NhZ2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1NpdGUuQnVsa1NlcnZpY2VBY3Rpb24uTm90aGluZ1RvUHJvY2VzcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG5vdGhpbmdUb1Byb2Nlc3MoKSB7XHJcbiAgICAgICAgICAgIFEubm90aWZ5RXJyb3IodGhpcy5nZXROb3RoaW5nVG9Qcm9jZXNzTWVzc2FnZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRQYXJhbGxlbFJlcXVlc3RzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCYXRjaFNpemUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHN0YXJ0UGFyYWxsZWxFeGVjdXRpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvZ3Jlc3NEaWFsb2coKTtcclxuICAgICAgICAgICAgdGhpcy5zdWNjZXNzQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdSZXF1ZXN0cyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVkUmVxdWVzdHMgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yQnlLZXkgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5xdWV1ZSA9IHRoaXMua2V5cy5zbGljZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXVlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB2YXIgcGFyYWxsZWxSZXF1ZXN0cyA9IHRoaXMuZ2V0UGFyYWxsZWxSZXF1ZXN0cygpO1xyXG4gICAgICAgICAgICB3aGlsZSAocGFyYWxsZWxSZXF1ZXN0cy0tID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlTmV4dEJhdGNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzZXJ2aWNlQ2FsbENsZWFudXAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzLS07XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVkUmVxdWVzdHMrKztcclxuXHJcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IFEudGV4dCgodGhpcy5wcm9ncmVzc0RpYWxvZy5jYW5jZWxsZWQgP1xyXG4gICAgICAgICAgICAgICAgJ1NpdGUuQmFzaWNQcm9ncmVzc0RpYWxvZy5DYW5jZWxUaXRsZScgOiAnU2l0ZS5CYXNpY1Byb2dyZXNzRGlhbG9nLlBsZWFzZVdhaXQnKSk7XHJcblxyXG4gICAgICAgICAgICB0aXRsZSArPSAnICgnO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdWNjZXNzQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZSArPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuQnVsa1NlcnZpY2VBY3Rpb24uU3VjY2Vzc0NvdW50JyksIHRoaXMuc3VjY2Vzc0NvdW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1Y2Nlc3NDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSArPSAnLCAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlICs9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5CdWxrU2VydmljZUFjdGlvbi5FcnJvckNvdW50JyksIHRoaXMuZXJyb3JDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NEaWFsb2cudGl0bGUgPSB0aXRsZSArICcpJztcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0RpYWxvZy52YWx1ZSA9IHRoaXMuc3VjY2Vzc0NvdW50ICsgdGhpcy5lcnJvckNvdW50O1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3Jlc3NEaWFsb2cuY2FuY2VsbGVkICYmIHRoaXMucHJvZ3Jlc3NEaWFsb2cudmFsdWUgPCB0aGlzLmtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVOZXh0QmF0Y2goKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nUmVxdWVzdHMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NEaWFsb2cuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdHMoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZXhlY3V0ZUZvckJhdGNoKGJhdGNoOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGV4ZWN1dGVOZXh0QmF0Y2goKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXRjaFNpemUgPSB0aGlzLmdldEJhdGNoU2l6ZSgpO1xyXG4gICAgICAgICAgICB2YXIgYmF0Y2ggPSBbXTtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYXRjaC5sZW5ndGggPj0gYmF0Y2hTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucXVldWVJbmRleCA+PSB0aGlzLnF1ZXVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJhdGNoLnB1c2godGhpcy5xdWV1ZVt0aGlzLnF1ZXVlSW5kZXgrK10pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYmF0Y2gubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nUmVxdWVzdHMrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUZvckJhdGNoKGJhdGNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEFsbEhhZEVycm9yc0Zvcm1hdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnU2l0ZS5CdWxrU2VydmljZUFjdGlvbi5BbGxIYWRFcnJvcnNGb3JtYXQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzaG93QWxsSGFkRXJyb3JzKCkge1xyXG4gICAgICAgICAgICBRLm5vdGlmeUVycm9yKFEuZm9ybWF0KHRoaXMuZ2V0QWxsSGFkRXJyb3JzRm9ybWF0KCksIHRoaXMuZXJyb3JDb3VudCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNvbWVIYWRFcnJvcnNGb3JtYXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1NpdGUuQnVsa1NlcnZpY2VBY3Rpb24uU29tZUhhZEVycm9yc0Zvcm1hdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNob3dTb21lSGFkRXJyb3JzKCkge1xyXG4gICAgICAgICAgICBRLm5vdGlmeVdhcm5pbmcoUS5mb3JtYXQodGhpcy5nZXRTb21lSGFkRXJyb3JzRm9ybWF0KCksIHRoaXMuc3VjY2Vzc0NvdW50LCB0aGlzLmVycm9yQ291bnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRBbGxTdWNjZXNzRm9ybWF0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdTaXRlLkJ1bGtTZXJ2aWNlQWN0aW9uLkFsbFN1Y2Nlc3NGb3JtYXQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzaG93QWxsU3VjY2VzcygpIHtcclxuICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKFEuZm9ybWF0KHRoaXMuZ2V0QWxsU3VjY2Vzc0Zvcm1hdCgpLCB0aGlzLnN1Y2Nlc3NDb3VudCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNob3dSZXN1bHRzKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lcnJvckNvdW50ID09PSAwICYmIHRoaXMuc3VjY2Vzc0NvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGhpbmdUb1Byb2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JDb3VudCA+IDAgJiYgdGhpcy5zdWNjZXNzQ291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0FsbEhhZEVycm9ycygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5lcnJvckNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U29tZUhhZEVycm9ycygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3dBbGxTdWNjZXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZXhlY3V0ZShrZXlzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgICAgICB0aGlzLmtleXMgPSBrZXlzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RoaW5nVG9Qcm9jZXNzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maXJtKHRoaXMua2V5cy5sZW5ndGgsICgpID0+IHRoaXMuc3RhcnRQYXJhbGxlbEV4ZWN1dGlvbigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldF9zdWNjZXNzQ291bnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1Y2Nlc3NDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldF9zdWNjZXNzQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3NDb3VudCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0X2Vycm9yQ291bnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yQ291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRfZXJyb3JDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JDb3VudCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uRGlhbG9nVXRpbHMge1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHBlbmRpbmdDaGFuZ2VzQ29uZmlybWF0aW9uKGVsZW1lbnQ6IEpRdWVyeSwgaGFzUGVuZGluZ0NoYW5nZXM6ICgpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICBlbGVtZW50Lm9uKCdkaWFsb2diZWZvcmVjbG9zZSBwYW5lbGJlZm9yZWNsb3NlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFTZXJlbml0eS5XWC5oYXNPcmlnaW5hbEV2ZW50KGUpIHx8ICFoYXNQZW5kaW5nQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgUS5jb25maXJtKCdZb3UgaGF2ZSBwZW5kaW5nIGNoYW5nZXMuIFNhdmUgdGhlbT8nLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gZWxlbWVudC5maW5kKCdkaXYuc2F2ZS1hbmQtY2xvc2UtYnV0dG9uJykuY2xpY2soKSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvbk5vOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0NsYXNzKCd1aS1kaWFsb2ctY29udGVudCcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kaWFsb2coJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoJ3MtUGFuZWwnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZy5jbG9zZVBhbmVsKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQ29tbW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckZvcm1hdHRlcigpXHJcbiAgICBleHBvcnQgY2xhc3MgRW51bVNlbGVjdEZvcm1hdHRlciBpbXBsZW1lbnRzIFNsaWNrLkZvcm1hdHRlciB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsb3dDbGVhciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtYXQoY3R4OiBTbGljay5Gb3JtYXR0ZXJDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHZhciBlbnVtVHlwZSA9IFNlcmVuaXR5LkVudW1UeXBlUmVnaXN0cnkuZ2V0KHRoaXMuZW51bUtleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2IgPSBcIjxzZWxlY3Q+XCI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbG93Q2xlYXIpIHtcclxuICAgICAgICAgICAgICAgIHNiICs9ICc8b3B0aW9uIHZhbHVlPVwiXCI+JztcclxuICAgICAgICAgICAgICAgIHNiICs9IFEuaHRtbEVuY29kZSh0aGlzLmVtcHR5SXRlbVRleHQgfHwgUS50ZXh0KFwiQ29udHJvbHMuU2VsZWN0RWRpdG9yLkVtcHR5SXRlbVRleHRcIikpO1xyXG4gICAgICAgICAgICAgICAgc2IgKz0gJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHggb2YgT2JqZWN0LmtleXMoZW51bVR5cGUpLmZpbHRlcih2ID0+ICFpc05hTihwYXJzZUludCh2LCAxMCkpKSkge1xyXG4gICAgICAgICAgICAgICAgc2IgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgeCArICdcIic7XHJcbiAgICAgICAgICAgICAgICBpZiAoeCA9PSBjdHgudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgc2IgKz0gXCIgc2VsZWN0ZWRcIjtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZW51bVR5cGVbeF07XHJcbiAgICAgICAgICAgICAgICBzYiArPSBcIj5cIjtcclxuICAgICAgICAgICAgICAgIHNiICs9IFEuaHRtbEVuY29kZShRLnRyeUdldFRleHQoXCJFbnVtcy5cIiArIHRoaXMuZW51bUtleSArIFwiLlwiICsgbmFtZSkgfHwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzYiArPSBcIjwvb3B0aW9uPlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzYiArPSBcIjwvc2VsZWN0PlwiO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQFNlcmVuaXR5LkRlY29yYXRvcnMub3B0aW9uKClcclxuICAgICAgICBwdWJsaWMgZW51bUtleTogc3RyaW5nO1xyXG5cclxuICAgICAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5vcHRpb24oKVxyXG4gICAgICAgIHB1YmxpYyBhbGxvd0NsZWFyOiBib29sZWFuO1xyXG5cclxuICAgICAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5vcHRpb24oKVxyXG4gICAgICAgIHB1YmxpYyBlbXB0eUl0ZW1UZXh0OiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkNvbW1vbiB7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFeGNlbEV4cG9ydE9wdGlvbnMge1xyXG4gICAgICAgIGdyaWQ6IFNlcmVuaXR5LkRhdGFHcmlkPGFueSwgYW55PjtcclxuICAgICAgICBzZXJ2aWNlOiBzdHJpbmc7XHJcbiAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiBib29sZWFuO1xyXG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIGhpbnQ/OiBzdHJpbmc7XHJcbiAgICAgICAgc2VwYXJhdG9yPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEV4Y2VsRXhwb3J0SGVscGVyIHtcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvb2xCdXR0b24ob3B0aW9uczogRXhjZWxFeHBvcnRPcHRpb25zKTogU2VyZW5pdHkuVG9vbEJ1dHRvbiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGludDogUS5jb2FsZXNjZShvcHRpb25zLmhpbnQsICdFeGNlbCcpLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEuY29hbGVzY2Uob3B0aW9ucy50aXRsZSwgJycpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdleHBvcnQteGxzeC1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5vblZpZXdTdWJtaXQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JpZCA9IG9wdGlvbnMuZ3JpZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBRLmRlZXBDbG9uZShncmlkLmdldFZpZXcoKS5wYXJhbXMpIGFzIFNlcmVuaXR5Lkxpc3RSZXF1ZXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuVGFrZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5Ta2lwID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc29ydEJ5ID0gZ3JpZC5nZXRWaWV3KCkuc29ydEJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0QnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5Tb3J0ID0gc29ydEJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5JbmNsdWRlQ29sdW1ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5zID0gZ3JpZC5nZXRHcmlkKCkuZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbHVtbiBvZiBjb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuSW5jbHVkZUNvbHVtbnMucHVzaChjb2x1bW4uaWQgfHwgY29sdW1uLmZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgUS5wb3N0VG9TZXJ2aWNlKHsgc2VydmljZTogb3B0aW9ucy5zZXJ2aWNlLCByZXF1ZXN0OiByZXF1ZXN0LCB0YXJnZXQ6ICdfYmxhbmsnIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogb3B0aW9ucy5zZXBhcmF0b3JcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkNvbW1vbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcyhbU2VyZW5pdHkuSUdldEVkaXRWYWx1ZSwgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZV0pXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5lZGl0b3IoKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMuZWxlbWVudChcIjxkaXYvPlwiKVxyXG4gICAgZXhwb3J0IGNsYXNzIEdyaWRFZGl0b3JCYXNlPFRFbnRpdHk+IGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxURW50aXR5LCBhbnk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBTZXJlbml0eS5JR2V0RWRpdFZhbHVlLCBTZXJlbml0eS5JU2V0RWRpdFZhbHVlIHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIl9faWRcIjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgbmV4dElkID0gMTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBpZChlbnRpdHk6IFRFbnRpdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChlbnRpdHkgYXMgYW55KVt0aGlzLmdldElkUHJvcGVydHkoKV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmV4dElkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJgXCIgKyB0aGlzLm5leHRJZCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNldE5ld0lkKGVudGl0eTogVEVudGl0eSkge1xyXG4gICAgICAgICAgICBlbnRpdHlbdGhpcy5nZXRJZFByb3BlcnR5KCldID0gdGhpcy5nZXROZXh0SWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlKG9wdDogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8YW55PiwgY2FsbGJhY2s6IChyOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHZvaWQpIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBvcHQucmVxdWVzdCBhcyBTZXJlbml0eS5TYXZlUmVxdWVzdDxURW50aXR5PjtcclxuICAgICAgICAgICAgdmFyIHJvdyA9IFEuZGVlcENsb25lKHJlcXVlc3QuRW50aXR5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpZCA9IHRoaXMuaWQocm93KTtcclxuICAgICAgICAgICAgaWYgKGlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIChyb3cgYXMgYW55KVt0aGlzLmdldElkUHJvcGVydHkoKV0gPSB0aGlzLmdldE5leHRJZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVFbnRpdHkocm93LCBpZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy52aWV3LmdldEl0ZW1zKCkuc2xpY2UoKTtcclxuICAgICAgICAgICAgaWYgKGlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gocm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IFEuaW5kZXhPZihpdGVtcywgeCA9PiB0aGlzLmlkKHgpID09PSBpZCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1tpbmRleF0gPSBRLmRlZXBDbG9uZSh7fSBhcyBURW50aXR5LCBpdGVtc1tpbmRleF0sIHJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RW50aXRpZXMoaXRlbXMpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayh7fSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZGVsZXRlRW50aXR5KGlkOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmRlbGV0ZUl0ZW0oaWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2YWxpZGF0ZUVudGl0eShyb3c6IFRFbnRpdHksIGlkOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2V0RW50aXRpZXMoaXRlbXM6IFRFbnRpdHlbXSkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoaXRlbXMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5ld0VudGl0eSgpOiBURW50aXR5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9IGFzIFRFbnRpdHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHN1cGVyLmdldEJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgdmFyIGFkZEJ1dHRvbiA9IFEudHJ5Rmlyc3QoYnV0dG9ucywgeCA9PiB4LmNzc0NsYXNzID09ICdhZGQtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGlmIChhZGRCdXR0b24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uLm9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbnRpdHlEaWFsb2codGhpcy5nZXRJdGVtVHlwZSgpLCBkbGcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbG9nID0gZGxnIGFzIEdyaWRFZGl0b3JEaWFsb2c8VEVudGl0eT47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5vblNhdmUgPSAob3B0LCBjYWxsYmFjaykgPT4gdGhpcy5zYXZlKG9wdCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZmVyRGlhbG9nUmVhZE9ubHkoZGlhbG9nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmxvYWRFbnRpdHlBbmRPcGVuRGlhbG9nKHRoaXMuZ2V0TmV3RW50aXR5KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucy5maWx0ZXIoeCA9PiB4LmNzc0NsYXNzICE9IFwicmVmcmVzaC1idXR0b25cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZWRpdEl0ZW0oZW50aXR5T3JJZDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaWQgPSBlbnRpdHlPcklkO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW50aXR5RGlhbG9nKHRoaXMuZ2V0SXRlbVR5cGUoKSwgZGxnID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBkaWFsb2cgPSBkbGcgYXMgR3JpZEVkaXRvckRpYWxvZzxURW50aXR5PjtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5vbkRlbGV0ZSA9IChvcHQsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRlbGV0ZUVudGl0eShpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7fSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2ZlckRpYWxvZ1JlYWRPbmx5KGRpYWxvZyk7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cub25TYXZlID0gKG9wdCwgY2FsbGJhY2spID0+IHRoaXMuc2F2ZShvcHQsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5sb2FkRW50aXR5QW5kT3BlbkRpYWxvZyhpdGVtKTtcclxuICAgICAgICAgICAgfSk7O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEVkaXRWYWx1ZShwcm9wZXJ0eSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eS5uYW1lXSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0RWRpdFZhbHVlKHNvdXJjZSwgcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHNvdXJjZVtwcm9wZXJ0eS5uYW1lXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogVEVudGl0eVtdIHtcclxuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLmdldElkUHJvcGVydHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlldy5nZXRJdGVtcygpLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gUS5kZWVwQ2xvbmUoeCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSB5W3BdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkICYmIGlkLnRvU3RyaW5nKCkuY2hhckF0KDApID09ICdgJylcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgeVtwXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB5O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IFRFbnRpdHlbXSkge1xyXG4gICAgICAgICAgICB2YXIgcCA9IHRoaXMuZ2V0SWRQcm9wZXJ0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoKHZhbHVlIHx8IFtdKS5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IFEuZGVlcENsb25lKHgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCh5IGFzIGFueSlbcF0gPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAoeSBhcyBhbnkpW3BdID0gXCJgXCIgKyB0aGlzLmdldE5leHRJZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHk7XHJcbiAgICAgICAgICAgIH0pLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRHcmlkQ2FuTG9hZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVzZVBhZ2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5pdGlhbFRpdGxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVRdWlja1NlYXJjaElucHV0KCkge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGVuYWJsZURlbGV0ZUNvbHVtbigpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlRGVsZXRlQ29sdW1uKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdEZWxldGUgUm93JyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiAnPGEgY2xhc3M9XCJpbmxpbmUtYWN0aW9uIGRlbGV0ZS1yb3dcIiB0aXRsZT1cImRlbGV0ZVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vIHRleHQtcmVkXCI+PC9pPjwvYT4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDI0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcikge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtOiBURW50aXR5ID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdXNlciBjbGlja3MgXCJpXCIgZWxlbWVudCwgZS5nLiBpY29uXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQucGFyZW50KCkuaGFzQ2xhc3MoJ2lubGluZS1hY3Rpb24nKSlcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzQ2xhc3MoJ2lubGluZS1hY3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZURlbGV0ZUNvbHVtbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNDbGFzcygnZGVsZXRlLXJvdycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0NvbnRyb2xzLkVudGl0eURpYWxvZy5EZWxldGVDb25maXJtYXRpb24nKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVFbnRpdHkoaXRlbVt0aGlzLmdldElkUHJvcGVydHkoKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkNvbW1vbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgR3JpZEVkaXRvckRpYWxvZzxURW50aXR5PiBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxURW50aXR5LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFwiX19pZFwiOyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvblNhdmU6IChvcHRpb25zOiBTZXJlbml0eS5TZXJ2aWNlT3B0aW9uczxTZXJlbml0eS5TYXZlUmVzcG9uc2U+LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBvbkRlbGV0ZTogKG9wdGlvbnM6IFNlcmVuaXR5LlNlcnZpY2VPcHRpb25zPFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlPixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uU2F2ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMub25EZWxldGUgPSBudWxsO1xyXG4gICAgICAgICAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlSW50ZXJmYWNlKCkge1xyXG4gICAgICAgICAgICBzdXBlci51cGRhdGVJbnRlcmZhY2UoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFwcGx5IGNoYW5nZXMgYnV0dG9uIGRvZXNuJ3Qgd29yayBwcm9wZXJseSB3aXRoIGluLW1lbW9yeSBncmlkcyB5ZXRcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwbHlDaGFuZ2VzQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5Q2hhbmdlc0J1dHRvbi5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlSGFuZGxlcihvcHRpb25zOiBTZXJlbml0eS5TZXJ2aWNlT3B0aW9uczxTZXJlbml0eS5TYXZlUmVzcG9uc2U+LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5vblNhdmUgJiYgdGhpcy5vblNhdmUob3B0aW9ucywgY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGRlbGV0ZUhhbmRsZXIob3B0aW9uczogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8U2VyZW5pdHkuRGVsZXRlUmVzcG9uc2U+LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVsZXRlICYmIHRoaXMub25EZWxldGUob3B0aW9ucywgY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgR3ltQWN0aW9uIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgaXMgYW4gZWRpdG9yIHdpZGdldCBidXQgaXQgb25seSBkaXNwbGF5cyBhIHRleHQsIG5vdCBlZGl0cyBpdC5cclxuICAgICAqICBcclxuICAgICAqL1xyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMuZWxlbWVudChcIjxkaXYvPlwiKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoW1NlcmVuaXR5LklTZXRFZGl0VmFsdWVdKVxyXG4gICAgZXhwb3J0IGNsYXNzIFN0YXRpY1RleHRCbG9jayBleHRlbmRzIFNlcmVuaXR5LldpZGdldDxTdGF0aWNUZXh0QmxvY2tPcHRpb25zPlxyXG4gICAgICAgIGltcGxlbWVudHMgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZSB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdGlvbnM6IFN0YXRpY1RleHRCbG9ja09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGhpZGUgdGhlIGNhcHRpb24gbGFiZWwgZm9yIHRoaXMgZWRpdG9yIGlmIGluIGEgZm9ybS4gdWdseSBoYWNrXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlkZUxhYmVsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsb3Nlc3QoJy5maWVsZCcpLmZpbmQoJy5jYXB0aW9uJykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50Q29udGVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB1cGRhdGVFbGVtZW50Q29udGVudCgpIHtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBRLmNvYWxlc2NlKHRoaXMub3B0aW9ucy50ZXh0LCB0aGlzLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIGlzTG9jYWxUZXh0IGlzIHNldCwgdGV4dCBpcyBhY3R1YWxseSBhIGxvY2FsIHRleHQga2V5XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNMb2NhbFRleHQpXHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gUS50ZXh0KHRleHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gZG9uJ3QgaHRtbCBlbmNvZGUgaWYgaXNIdG1sIG9wdGlvbiBpcyB0cnVlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNIdG1sKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmh0bWwodGV4dCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC50ZXh0KHRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnkgaW1wbGVtZW50aW5nIElTZXRFZGl0VmFsdWUgaW50ZXJmYWNlLCB3ZSBhbGxvdyB0aGlzIGVkaXRvciB0byBkaXNwbGF5IGl0cyBmaWVsZCB2YWx1ZS5cclxuICAgICAgICAgKiBCdXQgb25seSBkbyB0aGlzIHdoZW4gb3VyIHRleHQgY29udGVudCBpcyBub3QgZXhwbGljaXRseSBzZXQgaW4gb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRFZGl0VmFsdWUoc291cmNlOiBhbnksIHByb3BlcnR5OiBTZXJlbml0eS5Qcm9wZXJ0eUl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50ZXh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBRLmNvYWxlc2NlKHRoaXMub3B0aW9ucy50ZXh0LCBzb3VyY2VbcHJvcGVydHkubmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50Q29udGVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU3RhdGljVGV4dEJsb2NrT3B0aW9ucyB7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIGlzSHRtbDogYm9vbGVhbjtcclxuICAgICAgICBpc0xvY2FsVGV4dDogYm9vbGVhbjtcclxuICAgICAgICBoaWRlTGFiZWw6IGJvb2xlYW47XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VTZWxlY3Rpb24gZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioc2VsZWN0OiBKUXVlcnksIGN1cnJlbnRMYW5ndWFnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHNlbGVjdCk7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50TGFuZ3VhZ2UgPSBRLmNvYWxlc2NlKGN1cnJlbnRMYW5ndWFnZSwgJ2VuJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZShlID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXRoID0gUS5Db25maWcuYXBwbGljYXRpb25QYXRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGggJiYgcGF0aCAhPSAnLycgJiYgUS5lbmRzV2l0aChwYXRoLCAnLycpKVxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBwYXRoLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgJC5jb29raWUoJ0xhbmd1YWdlUHJlZmVyZW5jZScsIHNlbGVjdC52YWwoKSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlczogMzY1XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgUS5nZXRMb29rdXBBc3luYzxBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdz4oJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJykudGhlbih4ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghUS5hbnkoeC5pdGVtcywgeiA9PiB6Lkxhbmd1YWdlSWQgPT09IGN1cnJlbnRMYW5ndWFnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gY3VycmVudExhbmd1YWdlLmxhc3RJbmRleE9mKCctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMYW5ndWFnZSA9IGN1cnJlbnRMYW5ndWFnZS5zdWJzdHIoMCwgaWR4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFRLmFueSh4Lml0ZW1zLCB5ID0+IHkuTGFuZ3VhZ2VJZCA9PT0gY3VycmVudExhbmd1YWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudExhbmd1YWdlID0gJ2VuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudExhbmd1YWdlID0gJ2VuJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbCBvZiB4Lml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCBsLkxhbmd1YWdlSWQsIGwuTGFuZ3VhZ2VOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3QudmFsKGN1cnJlbnRMYW5ndWFnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQ29tbW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBTaWRlYmFyU2VhcmNoIGV4dGVuZHMgU2VyZW5pdHkuV2lkZ2V0PGFueT4ge1xyXG4gICAgICAgIHByaXZhdGUgbWVudVVMOiBKUXVlcnk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlucHV0OiBKUXVlcnksIG1lbnVVTDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlucHV0KTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBTZXJlbml0eS5RdWlja1NlYXJjaElucHV0KGlucHV0LCB7XHJcbiAgICAgICAgICAgICAgICBvblNlYXJjaDogKGZpZWxkLCB0ZXh0LCBzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNYXRjaEZsYWdzKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3ModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tZW51VUwgPSBtZW51VUw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlTWF0Y2hGbGFncyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIGxpTGlzdCA9IHRoaXMubWVudVVMLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ25vbi1tYXRjaCcpO1xyXG5cclxuICAgICAgICAgICAgdGV4dCA9IFEudHJpbVRvTnVsbCh0ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZXh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBsaUxpc3QucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHRleHQucmVwbGFjZSgnLCcsICcgJykuc3BsaXQoJyAnKS5maWx0ZXIoeCA9PiAhUS5pc1RyaW1tZWRFbXB0eSh4KSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0c1tpXSA9IFEudHJpbVRvTnVsbChTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKHBhcnRzW2ldKS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gbGlMaXN0O1xyXG4gICAgICAgICAgICBpdGVtcy5lYWNoKGZ1bmN0aW9uIChpZHgsIGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gJChlKTtcclxuICAgICAgICAgICAgICAgIHZhciB0aXRsZSA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoUS5jb2FsZXNjZSh4LnRleHQoKSwgJycpLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBvZiBwYXJ0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwICE9IG51bGwgJiYgISh0aXRsZS5pbmRleE9mKHApICE9PSAtMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeC5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWF0Y2hpbmdJdGVtcyA9IGl0ZW1zLm5vdCgnLm5vbi1tYXRjaCcpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZpc2libGVzID0gbWF0Y2hpbmdJdGVtcy5wYXJlbnRzKCdsaScpLmFkZChtYXRjaGluZ0l0ZW1zKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBub25WaXNpYmxlcyA9IGxpTGlzdC5ub3QodmlzaWJsZXMpO1xyXG4gICAgICAgICAgICBub25WaXNpYmxlcy5oaWRlKCkuYWRkQ2xhc3MoJ25vbi1tYXRjaCcpO1xyXG5cclxuICAgICAgICAgICAgdmlzaWJsZXMuc2hvdygpO1xyXG4gICAgICAgICAgICBsaUxpc3QuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEd5bUFjdGlvbi5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFRoZW1lU2VsZWN0aW9uIGV4dGVuZHMgU2VyZW5pdHkuV2lkZ2V0PGFueT4ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHNlbGVjdDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHNlbGVjdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZShlID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXRoID0gUS5Db25maWcuYXBwbGljYXRpb25QYXRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGggJiYgcGF0aCAhPSAnLycgJiYgUS5lbmRzV2l0aChwYXRoLCAnLycpKVxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBwYXRoLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICQuY29va2llKCdUaGVtZVByZWZlcmVuY2UnLCBzZWxlY3QudmFsKCksIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXM6IDM2NVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRoZW1lID0gc2VsZWN0LnZhbCgpIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhcmtTaWRlYmFyID0gdGhlbWUuaW5kZXhPZignbGlnaHQnKSA8IDA7XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NraW4tJyArIHRoaXMuZ2V0Q3VycmVudFRoZW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdza2luLScgKyB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAudG9nZ2xlQ2xhc3MoJ2Rhcmstc2lkZWJhcicsIGRhcmtTaWRlYmFyKVxyXG4gICAgICAgICAgICAgICAgICAgIC50b2dnbGVDbGFzcygnbGlnaHQtc2lkZWJhcicsICFkYXJrU2lkZWJhcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAnYmx1ZScsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVCbHVlJykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdibHVlLWxpZ2h0JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUJsdWVMaWdodCcpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAncHVycGxlJywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZVB1cnBsZScpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAncHVycGxlLWxpZ2h0JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZVB1cnBsZUxpZ2h0JykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdyZWQnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lUmVkJykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdyZWQtbGlnaHQnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lUmVkTGlnaHQnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2dyZWVuJywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUdyZWVuJykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdncmVlbi1saWdodCcsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVHcmVlbkxpZ2h0JykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICd5ZWxsb3cnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lWWVsbG93JykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICd5ZWxsb3ctbGlnaHQnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lWWVsbG93TGlnaHQnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2JsYWNrJywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUJsYWNrJykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdibGFjay1saWdodCcsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVCbGFja0xpZ2h0JykpO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0LnZhbCh0aGlzLmdldEN1cnJlbnRUaGVtZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDdXJyZW50VGhlbWUoKSB7XHJcbiAgICAgICAgICAgIHZhciBza2luQ2xhc3MgPSBRLmZpcnN0KCgkKCdib2R5JykuYXR0cignY2xhc3MnKSB8fCAnJykuc3BsaXQoJyAnKSwgeCA9PiBRLnN0YXJ0c1dpdGgoeCwgJ3NraW4tJykpO1xyXG4gICAgICAgICAgICBpZiAoc2tpbkNsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2tpbkNsYXNzLnN1YnN0cig1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICdibHVlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJkZWNsYXJlIHZhciBqc1BERjtcclxuXHJcbm5hbWVzcGFjZSBHeW1BY3Rpb24uQ29tbW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGRmRXhwb3J0T3B0aW9ucyB7XHJcbiAgICAgICAgZ3JpZDogU2VyZW5pdHkuRGF0YUdyaWQ8YW55LCBhbnk+O1xyXG4gICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gYm9vbGVhbjtcclxuICAgICAgICB0aXRsZT86IHN0cmluZztcclxuICAgICAgICBoaW50Pzogc3RyaW5nO1xyXG4gICAgICAgIHNlcGFyYXRvcj86IGJvb2xlYW47XHJcbiAgICAgICAgcmVwb3J0VGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgdGl0bGVUb3A/OiBudW1iZXI7XHJcbiAgICAgICAgdGl0bGVGb250U2l6ZT86IG51bWJlcjtcclxuICAgICAgICBmaWxlTmFtZT86IHN0cmluZztcclxuICAgICAgICBwYWdlTnVtYmVycz86IGJvb2xlYW47XHJcbiAgICAgICAgY29sdW1uVGl0bGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgICAgICB0YWJsZU9wdGlvbnM/OiBqc1BERi5BdXRvVGFibGVPcHRpb25zO1xyXG4gICAgICAgIG91dHB1dD86IHN0cmluZztcclxuICAgICAgICBhdXRvUHJpbnQ/OiBib29sZWFuO1xyXG4gICAgICAgIHByaW50RGF0ZVRpbWVIZWFkZXI/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUGRmRXhwb3J0SGVscGVyIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9BdXRvVGFibGVDb2x1bW5zKHNyY0NvbHVtbnM6IFNsaWNrLkNvbHVtbltdLCBjb2x1bW5TdHlsZXM6IHsgW2RhdGFLZXk6IHN0cmluZ106IGpzUERGLkF1dG9UYWJsZVN0eWxlczsgfSxcclxuICAgICAgICAgICAgICAgIGNvbHVtblRpdGxlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3JjQ29sdW1ucy5tYXAoc3JjID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2w6IGpzUERGLkF1dG9UYWJsZUNvbHVtbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhS2V5OiBzcmMuaWQgfHwgc3JjLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBzcmMubmFtZSB8fCAnJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uVGl0bGVzICYmIGNvbHVtblRpdGxlc1tjb2wuZGF0YUtleV0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBjb2wudGl0bGUgPSBjb2x1bW5UaXRsZXNbY29sLmRhdGFLZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzdHlsZToganNQREYuQXV0b1RhYmxlU3R5bGVzID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAoKHNyYy5jc3NDbGFzcyB8fCAnJykuaW5kZXhPZihcImFsaWduLXJpZ2h0XCIpID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuaGFsaWduID0gJ3JpZ2h0JztcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChzcmMuY3NzQ2xhc3MgfHwgJycpLmluZGV4T2YoXCJhbGlnbi1jZW50ZXJcIikgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5oYWxpZ24gPSAnY2VudGVyJztcclxuXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5TdHlsZXNbY29sLmRhdGFLZXldID0gc3R5bGU7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b0F1dG9UYWJsZURhdGEoZW50aXRpZXM6IGFueVtdLCBrZXlzOiBzdHJpbmdbXSwgc3JjQ29sdW1uczogU2xpY2suQ29sdW1uW10gKSB7XHJcbiAgICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdGllcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHN0ID0ge307XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjZWxsID0gMDsgY2VsbCA8IHNyY0NvbHVtbnMubGVuZ3RoOyBjZWxsKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3JjID0gc3JjQ29sdW1uc1tjZWxsXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmxkID0gc3JjLmZpZWxkIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2NlbGxdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3JjLmZvcm1hdHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sID0gc3JjLmZvcm1hdHRlcihyb3csIGNlbGwsIGl0ZW1bZmxkXSwgc3JjLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3JjLmZvcm1hdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sID0gc3JjLmZvcm1hdCh7IHJvdzogcm93LCBjZWxsOiBjZWxsLCBpdGVtOiBpdGVtLCB2YWx1ZTogaXRlbVtmbGRdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2tleV0gPSBpdGVtW2ZsZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFodG1sIHx8IChodG1sLmluZGV4T2YoJzwnKSA8IDAgJiYgaHRtbC5pbmRleE9mKCcmJykgPCAwKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2tleV0gPSBodG1sO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID09IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWwuY2hpbGRyZW5bMF0pLmlzKFwiOmlucHV0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc3Rba2V5XSA9ICQoZWwuY2hpbGRyZW5bMF0pLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA9PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsLmNoaWxkcmVuKS5pcygnLmNoZWNrLWJveCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc3Rba2V5XSA9ICQoZWwuY2hpbGRyZW4pLmhhc0NsYXNzKFwiY2hlY2tlZFwiKSA/IFwiWFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRzdFtrZXldID0gZWwudGV4dENvbnRlbnQgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZHN0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBleHBvcnRUb1BkZihvcHRpb25zOiBQZGZFeHBvcnRPcHRpb25zKTogdm9pZCB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZyA9IG9wdGlvbnMuZ3JpZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5vblZpZXdTdWJtaXQoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGluY2x1ZGVBdXRvVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gUS5kZWVwQ2xvbmUoZy52aWV3LnBhcmFtcykgYXMgU2VyZW5pdHkuTGlzdFJlcXVlc3Q7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuVGFrZSA9IDA7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuU2tpcCA9IDA7XHJcblxyXG4gICAgICAgICAgICB2YXIgc29ydEJ5ID0gZy52aWV3LnNvcnRCeTtcclxuICAgICAgICAgICAgaWYgKHNvcnRCeSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5Tb3J0ID0gc29ydEJ5O1xyXG5cclxuICAgICAgICAgICAgdmFyIGdyaWRDb2x1bW5zID0gZy5zbGlja0dyaWQuZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICBncmlkQ29sdW1ucyA9IGdyaWRDb2x1bW5zLmZpbHRlcih4ID0+IHguaWQgIT09IFwiX19zZWxlY3RfX1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3QuSW5jbHVkZUNvbHVtbnMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgY29sdW1uIG9mIGdyaWRDb2x1bW5zKVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5JbmNsdWRlQ29sdW1ucy5wdXNoKGNvbHVtbi5pZCB8fCBjb2x1bW4uZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGcudmlldy51cmwsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRvYyA9IG5ldyBqc1BERignbCcsICdwdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcmNDb2x1bW5zID0gZ3JpZENvbHVtbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHVtblN0eWxlczogeyBbZGF0YUtleTogc3RyaW5nXToganNQREYuQXV0b1RhYmxlU3R5bGVzOyB9ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHVtbnMgPSB0b0F1dG9UYWJsZUNvbHVtbnMoc3JjQ29sdW1ucywgY29sdW1uU3R5bGVzLCBvcHRpb25zLmNvbHVtblRpdGxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBjb2x1bW5zLm1hcCh4ID0+IHguZGF0YUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVudGl0aWVzID0gKDxTZXJlbml0eS5MaXN0UmVzcG9uc2U8YW55Pj5yZXNwb25zZSkuRW50aXRpZXMgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0b0F1dG9UYWJsZURhdGEoZW50aXRpZXMsIGtleXMsIHNyY0NvbHVtbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2Muc2V0Rm9udFNpemUob3B0aW9ucy50aXRsZUZvbnRTaXplIHx8IDEwKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2Muc2V0Rm9udFN0eWxlKCdib2xkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcG9ydFRpdGxlID0gb3B0aW9ucy5yZXBvcnRUaXRsZSB8fCBnLmdldFRpdGxlKCkgfHwgXCJSZXBvcnRcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLmF1dG9UYWJsZVRleHQocmVwb3J0VGl0bGUsIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudGl0bGVUb3AgfHwgMjUsIHsgaGFsaWduOiAnY2VudGVyJyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdGFsUGFnZXNFeHAgPSBcInt7VH19XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYWdlTnVtYmVycyA9IG9wdGlvbnMucGFnZU51bWJlcnMgPT0gbnVsbCB8fCBvcHRpb25zLnBhZ2VOdW1iZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdXRvT3B0aW9ucyA9ICQuZXh0ZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiB7IHRvcDogMjUsIGxlZnQ6IDI1LCByaWdodDogMjUsIGJvdHRvbTogcGFnZU51bWJlcnMgPyAyNSA6IDMwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0WTogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2xpbmVicmVhaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsUGFkZGluZzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlnbjogJ21pZGRsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uU3R5bGVzOiBjb2x1bW5TdHlsZXNcclxuICAgICAgICAgICAgICAgICAgICB9LCBvcHRpb25zLnRhYmxlT3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYWdlTnVtYmVycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm9vdGVyID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSBkYXRhLnBhZ2VDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvdGFsIHBhZ2UgbnVtYmVyIHBsdWdpbiBvbmx5IGF2YWlsYWJsZSBpbiBqc3BkZiB2MS4wK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2MucHV0VG90YWxQYWdlcyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArIFwiIC8gXCIgKyB0b3RhbFBhZ2VzRXhwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmF1dG9UYWJsZVRleHQoc3RyLCBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSBhdXRvT3B0aW9ucy5tYXJnaW4uYm90dG9tLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbGlnbjogJ2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b09wdGlvbnMuYWZ0ZXJQYWdlQ29udGVudCA9IGZvb3RlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJpbnQgaGVhZGVyIG9mIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wcmludERhdGVUaW1lSGVhZGVyID09IG51bGwgfHwgb3B0aW9ucy5wcmludERhdGVUaW1lSGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZWZvcmVQYWdlID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5zZXRGb250U3R5bGUoJ25vcm1hbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jLnNldEZvbnRTaXplKDgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERhdGUgYW5kIHRpbWUgb2YgdGhlIHJlcG9ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmF1dG9UYWJsZVRleHQoUS5mb3JtYXREYXRlKG5ldyBEYXRlKCksIFwiZGQtTU0teXl5eSBISDptbVwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoIC0gYXV0b09wdGlvbnMubWFyZ2luLnJpZ2h0LCAxMywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxpZ246ICdyaWdodCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b09wdGlvbnMuYmVmb3JlUGFnZUNvbnRlbnQgPSBiZWZvcmVQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLmF1dG9UYWJsZShjb2x1bW5zLCBkYXRhLCBhdXRvT3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jLnB1dFRvdGFsUGFnZXMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLnB1dFRvdGFsUGFnZXModG90YWxQYWdlc0V4cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLm91dHB1dCB8fCBvcHRpb25zLm91dHB1dCA9PSBcImZpbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZU5hbWUgPSBvcHRpb25zLmZpbGVOYW1lIHx8IG9wdGlvbnMucmVwb3J0VGl0bGUgfHwgXCJ7MH1fezF9LnBkZlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZSA9IFEuZm9ybWF0KGZpbGVOYW1lLCBnLmdldFRpdGxlKCkgfHwgXCJyZXBvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFEuZm9ybWF0RGF0ZShuZXcgRGF0ZSgpLCBcInl5eXlNTWRkX0hIbW1cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2Muc2F2ZShmaWxlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmF1dG9QcmludClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmF1dG9QcmludCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gb3B0aW9ucy5vdXRwdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dCA9PSAnbmV3d2luZG93JyB8fCAnX2JsYW5rJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gJ2RhdGF1cmxuZXd3aW5kb3cnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG91dHB1dCA9PSAnd2luZG93JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gJ2RhdGF1cmknO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2Mub3V0cHV0KG91dHB1dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb29sQnV0dG9uKG9wdGlvbnM6IFBkZkV4cG9ydE9wdGlvbnMpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiA8U2VyZW5pdHkuVG9vbEJ1dHRvbj57XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogb3B0aW9ucy50aXRsZSB8fCAnJyxcclxuICAgICAgICAgICAgICAgIGhpbnQ6IG9wdGlvbnMuaGludCB8fCAnUERGJyxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZXhwb3J0LXBkZi1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gZXhwb3J0VG9QZGYob3B0aW9ucyksXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IG9wdGlvbnMuc2VwYXJhdG9yXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbmNsdWRlSnNQREYoKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YganNQREYgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gJChcImpzUERGU2NyaXB0XCIpO1xyXG4gICAgICAgICAgICBpZiAoc2NyaXB0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAkKFwiPHNjcmlwdC8+XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInR5cGVcIiwgXCJ0ZXh0L2phdmFzY3JpcHRcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJqc1BERlNjcmlwdFwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzcmNcIiwgUS5yZXNvbHZlVXJsKFwifi9TY3JpcHRzL2pzcGRmLm1pbi5qc1wiKSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhkb2N1bWVudC5oZWFkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGluY2x1ZGVBdXRvVGFibGUoKSB7XHJcbiAgICAgICAgICAgIGluY2x1ZGVKc1BERigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBqc1BERiA9PT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIChqc1BERiBhcyBhbnkpLkFQSSA9PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgKGpzUERGIGFzIGFueSkuQVBJLmF1dG9UYWJsZSAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSAkKFwianNQREZBdXRvVGFibGVTY3JpcHRcIik7XHJcbiAgICAgICAgICAgIGlmIChzY3JpcHQubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICQoXCI8c2NyaXB0Lz5cIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHlwZVwiLCBcInRleHQvamF2YXNjcmlwdFwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImpzUERGQXV0b1RhYmxlU2NyaXB0XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInNyY1wiLCBRLnJlc29sdmVVcmwoXCJ+L1NjcmlwdHMvanNwZGYucGx1Z2luLmF1dG90YWJsZS5taW4uanNcIikpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oZG9jdW1lbnQuaGVhZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImRlY2xhcmUgdmFyIGpzUERGO1xyXG5cclxubmFtZXNwYWNlIEd5bUFjdGlvbi5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJlcG9ydERpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxSZXBvcnREaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVwb3J0OiBTZXJlbml0eS5SZXBvcnRpbmcuUmVwb3J0UmV0cmlldmVSZXNwb25zZTtcclxuICAgICAgICBwcml2YXRlIHByb3BlcnR5R3JpZDogU2VyZW5pdHkuUHJvcGVydHlHcmlkO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBSZXBvcnREaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVJbnRlcmZhY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUmVwb3J0KHRoaXMub3B0aW9ucy5yZXBvcnRLZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ0J1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVByb3BlcnR5R3JpZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUdyaWQgJiYgdGhpcy5ieUlkKCdQcm9wZXJ0eUdyaWQnKS5odG1sKCcnKS5hdHRyKCdjbGFzcycsICcnKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUdyaWQgPSBuZXcgU2VyZW5pdHkuUHJvcGVydHlHcmlkKHRoaXMuYnlJZCgnUHJvcGVydHlHcmlkJyksIHtcclxuICAgICAgICAgICAgICAgIGlkUHJlZml4OiB0aGlzLmlkUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgdXNlQ2F0ZWdvcmllczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiB0aGlzLnJlcG9ydC5Qcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIH0pLmluaXQobnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgbG9hZFJlcG9ydChyZXBvcnRLZXk6IHN0cmluZykge1xyXG4gICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L1JlcG9ydC9SZXRyaWV2ZScpLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFJlcG9ydEtleTogcmVwb3J0S2V5XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBvcnQgPSByZXNwb25zZSBhcyBTZXJlbml0eS5SZXBvcnRpbmcuUmVwb3J0UmV0cmlldmVSZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlhbG9nKCkuZGlhbG9nKCdvcHRpb24nLCAndGl0bGUnLCB0aGlzLnJlcG9ydC5UaXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9wZXJ0eUdyaWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnR5R3JpZC5sb2FkKHRoaXMucmVwb3J0LkluaXRpYWxTZXR0aW5ncyB8fCB7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJbnRlcmZhY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlSW50ZXJmYWNlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbigncHJpbnQtcHJldmlldy1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZSh0aGlzLnJlcG9ydCAmJiAhdGhpcy5yZXBvcnQuSXNEYXRhT25seVJlcG9ydCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbignZXhwb3J0LXBkZi1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZSh0aGlzLnJlcG9ydCAmJiAhdGhpcy5yZXBvcnQuSXNEYXRhT25seVJlcG9ydCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbignZXhwb3J0LXhsc3gtYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIC50b2dnbGUodGhpcy5yZXBvcnQgJiYgdGhpcy5yZXBvcnQuSXNEYXRhT25seVJlcG9ydCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleGVjdXRlUmVwb3J0KHRhcmdldDogc3RyaW5nLCBleHQ6IHN0cmluZywgZG93bmxvYWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBvcHQgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUdyaWQuc2F2ZShvcHQpO1xyXG4gICAgICAgICAgICBSZXBvcnRIZWxwZXIuZXhlY3V0ZSh7XHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZDogZG93bmxvYWQsXHJcbiAgICAgICAgICAgICAgICByZXBvcnRLZXk6IHRoaXMucmVwb3J0LlJlcG9ydEtleSxcclxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogZXh0IGFzIGFueSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBvcHRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZ2V0VG9vbGJhckJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdQcmV2aWV3JyxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ3ByaW50LXByZXZpZXctYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmV4ZWN1dGVSZXBvcnQoJ19ibGFuaycsIG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1BERicsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdleHBvcnQtcGRmLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5leGVjdXRlUmVwb3J0KCdfYmxhbmsnLCAncGRmJywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdFeGNlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdleHBvcnQteGxzeC1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuZXhlY3V0ZVJlcG9ydCgnX2JsYW5rJywgJ3hsc3gnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcG9ydERpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHJlcG9ydEtleTogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQ29tbW9uIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcG9ydEV4ZWN1dGVPcHRpb25zIHtcclxuICAgICAgICByZXBvcnRLZXk6IHN0cmluZztcclxuICAgICAgICBkb3dubG9hZD86IGJvb2xlYW47XHJcbiAgICAgICAgZXh0ZW5zaW9uPzogJ3BkZicgfCAnaHRtJyB8ICdodG1sJyB8ICd4bHN4JyB8ICdkb2N4JztcclxuICAgICAgICBnZXRQYXJhbXM/OiAoKSA9PiBhbnk7XHJcbiAgICAgICAgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxyXG4gICAgICAgIHRhcmdldD86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcG9ydEJ1dHRvbk9wdGlvbnMgZXh0ZW5kcyBSZXBvcnRFeGVjdXRlT3B0aW9ucyB7XHJcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgY3NzQ2xhc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgaWNvbj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJlcG9ydEhlbHBlciB7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb29sQnV0dG9uKG9wdGlvbnM6IFJlcG9ydEJ1dHRvbk9wdGlvbnMpOiBTZXJlbml0eS5Ub29sQnV0dG9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLmNvYWxlc2NlKG9wdGlvbnMudGl0bGUsICdSZXBvcnQnKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBRLmNvYWxlc2NlKG9wdGlvbnMuY3NzQ2xhc3MsICdwcmludC1idXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGljb246IG9wdGlvbnMuaWNvbixcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBSZXBvcnRIZWxwZXIuZXhlY3V0ZShvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBleGVjdXRlKG9wdGlvbnM6IFJlcG9ydEV4ZWN1dGVPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHQgPSBvcHRpb25zLmdldFBhcmFtcyA/IG9wdGlvbnMuZ2V0UGFyYW1zKCkgOiBvcHRpb25zLnBhcmFtcztcclxuXHJcbiAgICAgICAgICAgIFEucG9zdFRvVXJsKHtcclxuICAgICAgICAgICAgICAgIHVybDogJ34vUmVwb3J0LycgKyAob3B0aW9ucy5kb3dubG9hZCA/ICdEb3dubG9hZCcgOiAnUmVuZGVyJyksXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IG9wdGlvbnMucmVwb3J0S2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGV4dDogUS5jb2FsZXNjZShvcHRpb25zLmV4dGVuc2lvbiwgJ3BkZicpLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdDogb3B0ID8gJC50b0pTT04ob3B0KSA6ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBRLmNvYWxlc2NlKG9wdGlvbnMudGFyZ2V0LCAnX2JsYW5rJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZGVjbGFyZSB2YXIganNQREY7XHJcblxyXG5uYW1lc3BhY2UgR3ltQWN0aW9uLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgUmVwb3J0UGFnZSBleHRlbmRzIFNlcmVuaXR5LldpZGdldDxhbnk+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZXBvcnRLZXk6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIHByb3BlcnR5SXRlbXM6IFNlcmVuaXR5LlByb3BlcnR5SXRlbVtdO1xyXG4gICAgICAgIHByaXZhdGUgcHJvcGVydHlHcmlkOiBTZXJlbml0eS5Qcm9wZXJ0eUdyaWQ7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5yZXBvcnQtbGluaycsIGVsZW1lbnQpLmNsaWNrKGUgPT4gdGhpcy5yZXBvcnRMaW5rQ2xpY2soZSkpO1xyXG4gICAgICAgICAgICAkKCdkaXYubGluZScsIGVsZW1lbnQpLmNsaWNrKGUgPT4gdGhpcy5jYXRlZ29yeUNsaWNrKGUpKTtcclxuICAgICAgICAgICAgbmV3IFNlcmVuaXR5LlF1aWNrU2VhcmNoSW5wdXQoJCgnLnMtUXVpY2tTZWFyY2hCYXIgaW5wdXQnLCBlbGVtZW50KSwge1xyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g6IChmaWVsZCwgdGV4dCwgZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWF0Y2hGbGFncyh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVNYXRjaEZsYWdzKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgbGlMaXN0ID0gJCgnLnJlcG9ydC1saXN0JywgdGhpcy5lbGVtZW50KS5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgdGV4dCA9IFEudHJpbVRvTnVsbCh0ZXh0KTtcclxuICAgICAgICAgICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBsaUxpc3QuY2hpbGRyZW4oJ3VsJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnNob3coKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGV4dCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3ModGV4dCkudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXBvcnRJdGVtcyA9IGxpTGlzdC5maWx0ZXIoJy5yZXBvcnQtaXRlbScpO1xyXG4gICAgICAgICAgICByZXBvcnRJdGVtcy5lYWNoKGZ1bmN0aW9uIChpeCwgZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSAkKGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLmNvYWxlc2NlKHgudGV4dCgpLCAnJykudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUuaW5kZXhPZih0ZXh0KSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB4LmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWF0Y2hpbmdJdGVtcyA9IHJlcG9ydEl0ZW1zLm5vdCgnLm5vbi1tYXRjaCcpO1xyXG4gICAgICAgICAgICB2YXIgdmlzaWJsZXMgPSBtYXRjaGluZ0l0ZW1zLnBhcmVudHMoJ2xpJykuYWRkKG1hdGNoaW5nSXRlbXMpO1xyXG4gICAgICAgICAgICB2YXIgbm9uVmlzaWJsZXMgPSBsaUxpc3Qubm90KHZpc2libGVzKTtcclxuICAgICAgICAgICAgbm9uVmlzaWJsZXMuaGlkZSgpLmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgdmlzaWJsZXMuc2hvdygpO1xyXG4gICAgICAgICAgICBpZiAodmlzaWJsZXMubGVuZ3RoIDw9IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LmNoaWxkcmVuKCd1bCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNhdGVnb3J5Q2xpY2soZSkge1xyXG4gICAgICAgICAgICB2YXIgbGkgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaScpO1xyXG4gICAgICAgICAgICBpZiAobGkuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuICAgICAgICAgICAgICAgIGxpLmZpbmQoJ3VsJykuaGlkZSgnZmFzdCcpO1xyXG4gICAgICAgICAgICAgICAgbGkucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgICAgICBsaS5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGkuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgICAgICBsaS5jaGlsZHJlbigndWwnKS5zaG93KCdmYXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobGkuY2hpbGRyZW4oJ3VsJykuY2hpbGRyZW4oJ2xpJykubGVuZ3RoID09PSAxICYmICFsaS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpLmNoaWxkcmVuKCd1bCcpLmNoaWxkcmVuKCdsaScpLmNoaWxkcmVuKCcubGluZScpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCByZXBvcnRMaW5rQ2xpY2soZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG5ldyBSZXBvcnREaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0S2V5OiAkKGUudGFyZ2V0KS5kYXRhKCdrZXknKVxyXG4gICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uQ29tbW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUHJlZmVyZW5jZVN0b3JhZ2UgaW1wbGVtZW50cyBTZXJlbml0eS5TZXR0aW5nU3RvcmFnZSB7XHJcbiAgICAgICAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgVXNlclByZWZlcmVuY2VTZXJ2aWNlLlJldHJpZXZlKHtcclxuICAgICAgICAgICAgICAgIFByZWZlcmVuY2VUeXBlOiBcIlVzZXJQcmVmZXJlbmNlU3RvcmFnZVwiLFxyXG4gICAgICAgICAgICAgICAgTmFtZToga2V5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHZhbHVlID0gcmVzcG9uc2UuVmFsdWUsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFzeW5jOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEl0ZW0oa2V5OiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICBVc2VyUHJlZmVyZW5jZVNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIFByZWZlcmVuY2VUeXBlOiBcIlVzZXJQcmVmZXJlbmNlU3RvcmFnZVwiLFxyXG4gICAgICAgICAgICAgICAgTmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgVmFsdWU6IGRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBHeW1BY3Rpb24uRmVyaWFzIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBGZXJpYXNEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8RmVyaWFzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEZlcmlhc0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gRmVyaWFzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gRmVyaWFzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gRmVyaWFzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBGZXJpYXNSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gRmVyaWFzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEZlcmlhc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEZlcmlhc0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBHeW1BY3Rpb24uRmVyaWFzIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBGZXJpYXNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxGZXJpYXNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ0Zlcmlhcy5GZXJpYXMnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBGZXJpYXNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEZlcmlhc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBGZXJpYXNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBGZXJpYXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBGZXJpYXNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSBzdXBlci5nZXRCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goR3ltQWN0aW9uLkNvbW1vbi5FeGNlbEV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IHRoaXMub25WaWV3U3VibWl0KCksXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiAnRmVyaWFzL0Zlcmlhcy9MaXN0RXhjZWwnLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiB0cnVlXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChHeW1BY3Rpb24uQ29tbW9uLlBkZkV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IHRoaXMub25WaWV3U3VibWl0KClcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBHeW1BY3Rpb24uRmlzaW90ZXJhcGV1dGEge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEZpc2lvdGVyYXBldXRhRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEZpc2lvdGVyYXBldXRhUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEZpc2lvdGVyYXBldXRhRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBGaXNpb3RlcmFwZXV0YVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEZpc2lvdGVyYXBldXRhUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBGaXNpb3RlcmFwZXV0YVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEZpc2lvdGVyYXBldXRhU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBGaXNpb3RlcmFwZXV0YVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBGaXNpb3RlcmFwZXV0YVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBGaXNpb3RlcmFwZXV0YVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEZpc2lvdGVyYXBldXRhRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEd5bUFjdGlvbi5GaXNpb3RlcmFwZXV0YSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgRmlzaW90ZXJhcGV1dGFHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxGaXNpb3RlcmFwZXV0YVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnRmlzaW90ZXJhcGV1dGEuRmlzaW90ZXJhcGV1dGEnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBGaXNpb3RlcmFwZXV0YURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gRmlzaW90ZXJhcGV1dGFSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gRmlzaW90ZXJhcGV1dGFSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBGaXNpb3RlcmFwZXV0YVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEZpc2lvdGVyYXBldXRhU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25zID0gc3VwZXIuZ2V0QnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKEd5bUFjdGlvbi5Db21tb24uRXhjZWxFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpLFxyXG4gICAgICAgICAgICAgICAgc2VydmljZTogJ0Zpc2lvdGVyYXBldXRhL0Zpc2lvdGVyYXBldXRhL0xpc3RFeGNlbCcsXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IHRydWVcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKEd5bUFjdGlvbi5Db21tb24uUGRmRXhwb3J0SGVscGVyLmNyZWF0ZVRvb2xCdXR0b24oe1xyXG4gICAgICAgICAgICAgICAgZ3JpZDogdGhpcyxcclxuICAgICAgICAgICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gdGhpcy5vblZpZXdTdWJtaXQoKVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEd5bUFjdGlvbi5JbnN0cnV0b3Ige1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEluc3RydXRvckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxJbnN0cnV0b3JSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gSW5zdHJ1dG9yRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBJbnN0cnV0b3JSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBJbnN0cnV0b3JSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEluc3RydXRvclJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEluc3RydXRvclNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gSW5zdHJ1dG9yUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEluc3RydXRvclJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBJbnN0cnV0b3JSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBJbnN0cnV0b3JGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgR3ltQWN0aW9uLkluc3RydXRvciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgSW5zdHJ1dG9yR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8SW5zdHJ1dG9yUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdJbnN0cnV0b3IuSW5zdHJ1dG9yJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gSW5zdHJ1dG9yRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBJbnN0cnV0b3JSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gSW5zdHJ1dG9yUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gSW5zdHJ1dG9yUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gSW5zdHJ1dG9yU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25zID0gc3VwZXIuZ2V0QnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKEd5bUFjdGlvbi5Db21tb24uRXhjZWxFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpLFxyXG4gICAgICAgICAgICAgICAgc2VydmljZTogJ0luc3RydXRvci9JbnN0cnV0b3IvTGlzdEV4Y2VsJyxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogdHJ1ZVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goR3ltQWN0aW9uLkNvbW1vbi5QZGZFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTG9naW5QYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8TG9naW5SZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBMb2dpbkZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgJC5mblsndmVnYXMnXSAmJiAkKCdib2R5JylbJ3ZlZ2FzJ10oe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDMwMDAwLFxyXG4gICAgICAgICAgICAgICAgY292ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvdmVybGF5OiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUlBQUFBQ0FRTUFBQUJJZUo5bkFBQUFBM05DU1ZRSUNBamI0VVwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIi9nQUFBQUJsQk1WRVgvLy84QUFBQlZ3dE4rQUFBQUFuUlNUbE1BLzF1UklyVUFBQUFKY0VoWmN3QUFBc1FBQUFMRUFWdVJuUXNBQUFBV2RFVllkRU55WldGMFwiICtcclxuICAgICAgICAgICAgICAgICAgICBcImFXOXVJRlJwYldVQU1EUXZNVE12TVRHclcwVDZBQUFBSEhSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCR2FYSmxkMjl5YTNNZ1ExTTFjYlhqTmdBQUFBeEpSRUZVQ0psamFHQmdBQUFCaEFDQnJPTklQZ0FBQUFCSlJVNUVya0pnZ2c9PVwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzcmM6IFEucmVzb2x2ZVVybChcIn4vQ29udGVudC9zaXRlL3NsaWRlcy9zbGlkZTEuanBnXCIpLCB0cmFuc2l0aW9uOiAnZmFkZScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHNyYzogUS5yZXNvbHZlVXJsKFwifi9Db250ZW50L3NpdGUvc2xpZGVzL3NsaWRlMi5qcGdcIiksIHRyYW5zaXRpb246ICd6b29tT3V0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc3JjOiBRLnJlc29sdmVVcmwoXCJ+L0NvbnRlbnQvc2l0ZS9zbGlkZXMvc2xpZGUzLmpwZ1wiKSwgdHJhbnNpdGlvbjogJ3N3aXJsTGVmdCcgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnTG9naW5CdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvUmV0dXJuVXJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiAocmVzcG9uc2U6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvciAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yLkNvZGUgPT0gXCJSZWRpcmVjdFVzZXJUb1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLkVycm9yLkFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IgIT0gbnVsbCAmJiAhUS5pc0VtcHR5T3JOdWxsKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeUVycm9yKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI1Bhc3N3b3JkJykuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuRXJyb3JIYW5kbGluZy5zaG93U2VydmljZUVycm9yKHJlc3BvbnNlLkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgcmVkaXJlY3RUb1JldHVyblVybCgpIHtcclxuICAgICAgICAgICAgdmFyIHEgPSBRLnBhcnNlUXVlcnlTdHJpbmcoKTtcclxuICAgICAgICAgICAgdmFyIHJldHVyblVybCA9IHFbJ3JldHVyblVybCddIHx8IHFbJ1JldHVyblVybCddO1xyXG4gICAgICAgICAgICBpZiAocmV0dXJuVXJsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc2ggIT0gbnVsbCAmJiBoYXNoICE9ICcjJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5VcmwgKz0gaGFzaDtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmV0dXJuVXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuPGRpdiBjbGFzcz1cImZsZXgtbGF5b3V0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPjwvZGl2PlxyXG4gICAgPGgzPiR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5Gb3JtVGl0bGVcIil9PC9oMz5cclxuICAgIDxmb3JtIGlkPVwifl9Gb3JtXCIgYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInMtRm9ybVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzZXQgdWktd2lkZ2V0IHVpLXdpZGdldC1jb250ZW50IHVpLWNvcm5lci1hbGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ+X1Byb3BlcnR5R3JpZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIn5fTG9naW5CdXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uU2lnbkluQnV0dG9uXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG48L2Rpdj5cclxuYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPENoYW5nZVBhc3N3b3JkUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ2hhbmdlUGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBDaGFuZ2VQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgQ2hhbmdlUGFzc3dvcmRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTmV3UGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0udygnQ29uZmlybVBhc3N3b3JkJywgU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3IpLnZhbHVlLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS5mb3JtYXQoUS50ZXh0KCdWYWxpZGF0aW9uLk1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGgnKSwgNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQudmFsdWUgIT09IHRoaXMuZm9ybS5OZXdQYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uUGFzc3dvcmRDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvQ2hhbmdlUGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEd5bUFjdGlvbi5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxGb3Jnb3RQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEZvcmdvdFBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogRm9yZ290UGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IEZvcmdvdFBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBHeW1BY3Rpb24uTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxSZXNldFBhc3N3b3JkUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUmVzZXRQYXNzd29yZEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IFJlc2V0UGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IFJlc2V0UGFzc3dvcmRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZS5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEuZm9ybWF0KFEudGV4dCgnVmFsaWRhdGlvbi5NaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoJyksIDcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LlRva2VuID0gdGhpcy5ieUlkKCdUb2tlbicpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9SZXNldFBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuUmVzZXRQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvTG9naW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgR3ltQWN0aW9uLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNpZ25VcFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxTaWduVXBSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBTaWduVXBGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBTaWduVXBGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IFNpZ25VcEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybUVtYWlsLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1FbWFpbC52YWx1ZSAhPT0gdGhpcy5mb3JtLkVtYWlsLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5FbWFpbENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L1NpZ25VcCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzcGxheU5hbWU6IHRoaXMuZm9ybS5EaXNwbGF5TmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWw6IHRoaXMuZm9ybS5FbWFpbC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQ6IHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLlNpZ25VcC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgR3ltQWN0aW9uLlBhZ2FtZW50byB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUGFnYW1lbnRvRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFBhZ2FtZW50b1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBQYWdhbWVudG9Gb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFBhZ2FtZW50b1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFBhZ2FtZW50b1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFBhZ2FtZW50b1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUGFnYW1lbnRvUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFBhZ2FtZW50b1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQYWdhbWVudG9Sb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBQYWdhbWVudG9Gb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgR3ltQWN0aW9uLlBhZ2FtZW50byB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUGFnYW1lbnRvR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UGFnYW1lbnRvUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdQYWdhbWVudG8uUGFnYW1lbnRvJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUGFnYW1lbnRvRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBQYWdhbWVudG9Sb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUGFnYW1lbnRvUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUGFnYW1lbnRvUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUGFnYW1lbnRvU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25zID0gc3VwZXIuZ2V0QnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKEd5bUFjdGlvbi5Db21tb24uRXhjZWxFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpLFxyXG4gICAgICAgICAgICAgICAgc2VydmljZTogJ1BhZ2FtZW50by9QYWdhbWVudG8vTGlzdEV4Y2VsJyxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogdHJ1ZVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goR3ltQWN0aW9uLkNvbW1vbi5QZGZFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgR3ltQWN0aW9uLlBsYW5vIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQbGFub0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxQbGFub1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBQbGFub0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUGxhbm9Sb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQbGFub1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUGxhbm9Sb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQbGFub1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUGxhbm9Sb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUGxhbm9Sb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUGxhbm9Sb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBQbGFub0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBHeW1BY3Rpb24uUGxhbm8ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFBsYW5vR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UGxhbm9Sb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ1BsYW5vLlBsYW5vJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUGxhbm9EaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFBsYW5vUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFBsYW5vUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUGxhbm9Sb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQbGFub1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRCdXR0b25zKCkge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHN1cGVyLmdldEJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChHeW1BY3Rpb24uQ29tbW9uLkV4Y2VsRXhwb3J0SGVscGVyLmNyZWF0ZVRvb2xCdXR0b24oe1xyXG4gICAgICAgICAgICAgICAgZ3JpZDogdGhpcyxcclxuICAgICAgICAgICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gdGhpcy5vblZpZXdTdWJtaXQoKSxcclxuICAgICAgICAgICAgICAgIHNlcnZpY2U6ICdQbGFuby9QbGFuby9MaXN0RXhjZWwnLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiB0cnVlXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChHeW1BY3Rpb24uQ29tbW9uLlBkZkV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IHRoaXMub25WaWV3U3VibWl0KClcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBHeW1BY3Rpb24uUGxhbm9BdWxhIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQbGFub0F1bGFEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8UGxhbm9BdWxhUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFBsYW5vQXVsYUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUGxhbm9BdWxhUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUGxhbm9BdWxhUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUGxhbm9BdWxhU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQbGFub0F1bGFSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUGxhbm9BdWxhUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFBsYW5vQXVsYVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFBsYW5vQXVsYUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBHeW1BY3Rpb24uUGxhbm9BdWxhIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQbGFub0F1bGFHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxQbGFub0F1bGFSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ1BsYW5vQXVsYS5QbGFub0F1bGEnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBQbGFub0F1bGFEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFBsYW5vQXVsYVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQbGFub0F1bGFSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQbGFub0F1bGFSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQbGFub0F1bGFTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSBzdXBlci5nZXRCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goR3ltQWN0aW9uLkNvbW1vbi5FeGNlbEV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IHRoaXMub25WaWV3U3VibWl0KCksXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiAnUGxhbm9BdWxhL1BsYW5vQXVsYS9MaXN0RXhjZWwnLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiB0cnVlXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChHeW1BY3Rpb24uQ29tbW9uLlBkZkV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IHRoaXMub25WaWV3U3VibWl0KClcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBHeW1BY3Rpb24uUmVnaXN0cm9BdWxhIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZWdpc3Ryb0F1bGFEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8UmVnaXN0cm9BdWxhUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFJlZ2lzdHJvQXVsYUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUmVnaXN0cm9BdWxhUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUmVnaXN0cm9BdWxhUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmVnaXN0cm9BdWxhU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBSZWdpc3Ryb0F1bGFSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVnaXN0cm9BdWxhUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFJlZ2lzdHJvQXVsYVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFJlZ2lzdHJvQXVsYUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBHeW1BY3Rpb24uUmVnaXN0cm9BdWxhIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZWdpc3Ryb0F1bGFHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxSZWdpc3Ryb0F1bGFSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ1JlZ2lzdHJvQXVsYS5SZWdpc3Ryb0F1bGEnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBSZWdpc3Ryb0F1bGFEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFJlZ2lzdHJvQXVsYVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBSZWdpc3Ryb0F1bGFSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSZWdpc3Ryb0F1bGFSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSZWdpc3Ryb0F1bGFTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSBzdXBlci5nZXRCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goR3ltQWN0aW9uLkNvbW1vbi5FeGNlbEV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IHRoaXMub25WaWV3U3VibWl0KCksXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiAnUmVnaXN0cm9BdWxhL1JlZ2lzdHJvQXVsYS9MaXN0RXhjZWwnLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiB0cnVlXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChHeW1BY3Rpb24uQ29tbW9uLlBkZkV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IHRoaXMub25WaWV3U3VibWl0KClcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG4gICB9XHJcbn0iXX0=