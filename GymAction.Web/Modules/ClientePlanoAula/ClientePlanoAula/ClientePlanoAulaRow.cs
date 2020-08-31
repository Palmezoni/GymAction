
namespace GymAction.ClientePlanoAula.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("ClientePlanoAula"), TableName("[dbo].[CLIENTE_PLANO_AULA]")]
    [DisplayName("Clientes vs Aulas"), InstanceName("Cliente vs Aula")]
    [ReadPermission("ClientePlanoAula:General")]
    [ModifyPermission("ClientePlanoAula:General")]
    public sealed class ClientePlanoAulaRow : Row, IIdRow
    {
        [DisplayName("Cod Registro"), Column("COD_REGISTRO"), Identity, Visible(false)]
        public Int32? CodRegistro
        {
            get { return Fields.CodRegistro[this]; }
            set { Fields.CodRegistro[this] = value; }
        }
        [DisplayName("Plano"), Column("COD_PLANO"), PrimaryKey, ForeignKey("[dbo].[PLANO]", "COD_PLANO"), LeftJoin("jPlano"), TextualField("PlanoDesNome"), NotNull]
        [LookupEditor("Plano.Plano")]
        public Int32? Plano
        {
            get { return Fields.Plano[this]; }
            set { Fields.Plano[this] = value; }
        }

        [DisplayName("Aula"), Column("COD_AULA"), PrimaryKey, ForeignKey("[dbo].[AULA]", "COD_AULA"), LeftJoin("jAula"), TextualField("AulaDesAula"), NotNull]
        [LookupEditor("Aula.Aula")]
        public Int32? Aula
        {
            get { return Fields.Aula[this]; }
            set { Fields.Aula[this] = value; }
        }

        [DisplayName("Cliente"), Column("COD_CLIENTE"), PrimaryKey, ForeignKey("[dbo].[CLIENTE]", "COD_CLIENTE"), LeftJoin("jCliente"), TextualField("ClienteDesNome"), NotNull]
        [LookupEditor("Cliente.Cliente")]
        public Int32? Cliente
        {
            get { return Fields.Cliente[this]; }
            set { Fields.Cliente[this] = value; }
        }

        [DisplayName("Plano Des Nome"), Expression("jPlano.[DES_NOME]"), QuickSearch]
        public String PlanoDesNome
        {
            get { return Fields.PlanoDesNome[this]; }
            set { Fields.PlanoDesNome[this] = value; }
        }

        [DisplayName("Plano Idf Tipo"), Expression("jPlano.[IDF_TIPO]")]
        public String PlanoIdfTipo
        {
            get { return Fields.PlanoIdfTipo[this]; }
            set { Fields.PlanoIdfTipo[this] = value; }
        }

        [DisplayName("Plano Idf Aivo"), Expression("jPlano.[IDF_AIVO]")]
        public Boolean? PlanoIdfAivo
        {
            get { return Fields.PlanoIdfAivo[this]; }
            set { Fields.PlanoIdfAivo[this] = value; }
        }

        [DisplayName("Aula Des Aula"), Expression("jAula.[DES_AULA]"), QuickSearch]
        public String AulaDesAula
        {
            get { return Fields.AulaDesAula[this]; }
            set { Fields.AulaDesAula[this] = value; }
        }

        [DisplayName("Aula Idf Tipo Atividade"), Expression("jAula.[IDF_TIPO_ATIVIDADE]")]
        public Boolean? AulaIdfTipoAtividade
        {
            get { return Fields.AulaIdfTipoAtividade[this]; }
            set { Fields.AulaIdfTipoAtividade[this] = value; }
        }

        [DisplayName("Aula Idf Ativo"), Expression("jAula.[IDF_ATIVO]")]
        public Boolean? AulaIdfAtivo
        {
            get { return Fields.AulaIdfAtivo[this]; }
            set { Fields.AulaIdfAtivo[this] = value; }
        }

        [DisplayName("Cliente Cod Biometria"), Expression("jCliente.[COD_BIOMETRIA]")]
        public Int32? ClienteCodBiometria
        {
            get { return Fields.ClienteCodBiometria[this]; }
            set { Fields.ClienteCodBiometria[this] = value; }
        }

        [DisplayName("Cliente Des Nome"), Expression("jCliente.[DES_NOME]"), QuickSearch]
        public String ClienteDesNome
        {
            get { return Fields.ClienteDesNome[this]; }
            set { Fields.ClienteDesNome[this] = value; }
        }

        [DisplayName("Cliente Des Rg"), Expression("jCliente.[DES_RG]")]
        public String ClienteDesRg
        {
            get { return Fields.ClienteDesRg[this]; }
            set { Fields.ClienteDesRg[this] = value; }
        }

        [DisplayName("Cliente Des Cpf"), Expression("jCliente.[DES_CPF]")]
        public String ClienteDesCpf
        {
            get { return Fields.ClienteDesCpf[this]; }
            set { Fields.ClienteDesCpf[this] = value; }
        }

        [DisplayName("Cliente Idf Adimplente"), Expression("jCliente.[IDF_ADIMPLENTE]")]
        public Boolean? ClienteIdfAdimplente
        {
            get { return Fields.ClienteIdfAdimplente[this]; }
            set { Fields.ClienteIdfAdimplente[this] = value; }
        }

        [DisplayName("Cliente Idf Ativo"), Expression("jCliente.[IDF_ATIVO]")]
        public Boolean? ClienteIdfAtivo
        {
            get { return Fields.ClienteIdfAtivo[this]; }
            set { Fields.ClienteIdfAtivo[this] = value; }
        }

        [DisplayName("Cliente Des Endereco"), Expression("jCliente.[DES_ENDERECO]")]
        public String ClienteDesEndereco
        {
            get { return Fields.ClienteDesEndereco[this]; }
            set { Fields.ClienteDesEndereco[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodRegistro; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ClientePlanoAulaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodRegistro;
            public Int32Field Plano;
            public Int32Field Aula;
            public Int32Field Cliente;

            public StringField PlanoDesNome;
            public StringField PlanoIdfTipo;
            public BooleanField PlanoIdfAivo;

            public StringField AulaDesAula;
            public BooleanField AulaIdfTipoAtividade;
            public BooleanField AulaIdfAtivo;

            public Int32Field ClienteCodBiometria;
            public StringField ClienteDesNome;
            public StringField ClienteDesRg;
            public StringField ClienteDesCpf;
            public BooleanField ClienteIdfAdimplente;
            public BooleanField ClienteIdfAtivo;
            public StringField ClienteDesEndereco;
        }
    }
}
