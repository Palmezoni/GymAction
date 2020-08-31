
namespace GymAction.Ferias.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Ferias"), TableName("[dbo].[FERIAS]")]
    [DisplayName("Férias"), InstanceName("Férias")]
    [ReadPermission("Ferias:General")]
    [ModifyPermission("Ferias:General")]
    public sealed class FeriasRow : Row, IIdRow
    {
        [DisplayName("Cod Ferias"), Column("COD_FERIAS"), Identity, Visible(false)]
        public Int32? CodFerias
        {
            get { return Fields.CodFerias[this]; }
            set { Fields.CodFerias[this] = value; }
        }

        [DisplayName("Cod Plano"), Column("COD_PLANO"), NotNull, ForeignKey("[dbo].[PLANO]", "COD_PLANO"), LeftJoin("jCodPlano"), TextualField("CodPlanoDesNome")]
        [LookupEditor("Plano.Plano")]
        public Int32? CodPlano
        {
            get { return Fields.CodPlano[this]; }
            set { Fields.CodPlano[this] = value; }
        }

        [DisplayName("Cod Aula"), Column("COD_AULA"), NotNull, ForeignKey("[dbo].[AULA]", "COD_AULA"), LeftJoin("jCodAula"), TextualField("CodAulaDesAula")]
        [LookupEditor("Aula.Aula")]
        public Int32? CodAula
        {
            get { return Fields.CodAula[this]; }
            set { Fields.CodAula[this] = value; }
        }

        [DisplayName("Cod Cliente"), Column("COD_CLIENTE"), NotNull, ForeignKey("[dbo].[CLIENTE]", "COD_CLIENTE"), LeftJoin("jCodCliente"), TextualField("CodClienteDesNome")]
        [LookupEditor("Cliente.Cliente")]
        public Int32? CodCliente
        {
            get { return Fields.CodCliente[this]; }
            set { Fields.CodCliente[this] = value; }
        }

        [DisplayName("Dat Inicio"), Column("DAT_INICIO"), NotNull]
        public DateTime? DatInicio
        {
            get { return Fields.DatInicio[this]; }
            set { Fields.DatInicio[this] = value; }
        }

        [DisplayName("Dat Fim"), Column("DAT_FIM"), NotNull]
        public DateTime? DatFim
        {
            get { return Fields.DatFim[this]; }
            set { Fields.DatFim[this] = value; }
        }

        [DisplayName("Cod Plano Des Nome"), Expression("jCodPlano.[DES_NOME]"), QuickSearch]
        public String CodPlanoDesNome
        {
            get { return Fields.CodPlanoDesNome[this]; }
            set { Fields.CodPlanoDesNome[this] = value; }
        }

        [DisplayName("Cod Plano Idf Tipo"), Expression("jCodPlano.[IDF_TIPO]")]
        public String CodPlanoIdfTipo
        {
            get { return Fields.CodPlanoIdfTipo[this]; }
            set { Fields.CodPlanoIdfTipo[this] = value; }
        }

        [DisplayName("Cod Plano Idf Aivo"), Expression("jCodPlano.[IDF_AIVO]")]
        public Boolean? CodPlanoIdfAivo
        {
            get { return Fields.CodPlanoIdfAivo[this]; }
            set { Fields.CodPlanoIdfAivo[this] = value; }
        }

        [DisplayName("Cod Aula Des Aula"), Expression("jCodAula.[DES_AULA]"), QuickSearch]
        public String CodAulaDesAula
        {
            get { return Fields.CodAulaDesAula[this]; }
            set { Fields.CodAulaDesAula[this] = value; }
        }

        [DisplayName("Cod Aula Idf Tipo Atividade"), Expression("jCodAula.[IDF_TIPO_ATIVIDADE]")]
        public Boolean? CodAulaIdfTipoAtividade
        {
            get { return Fields.CodAulaIdfTipoAtividade[this]; }
            set { Fields.CodAulaIdfTipoAtividade[this] = value; }
        }

        [DisplayName("Cod Aula Idf Ativo"), Expression("jCodAula.[IDF_ATIVO]")]
        public Boolean? CodAulaIdfAtivo
        {
            get { return Fields.CodAulaIdfAtivo[this]; }
            set { Fields.CodAulaIdfAtivo[this] = value; }
        }

        [DisplayName("Cod Cliente Cod Biometria"), Expression("jCodCliente.[COD_BIOMETRIA]")]
        public Int32? CodClienteCodBiometria
        {
            get { return Fields.CodClienteCodBiometria[this]; }
            set { Fields.CodClienteCodBiometria[this] = value; }
        }

        [DisplayName("Cod Cliente Des Nome"), Expression("jCodCliente.[DES_NOME]"), QuickSearch]
        public String CodClienteDesNome
        {
            get { return Fields.CodClienteDesNome[this]; }
            set { Fields.CodClienteDesNome[this] = value; }
        }

        [DisplayName("Cod Cliente Des Rg"), Expression("jCodCliente.[DES_RG]")]
        public String CodClienteDesRg
        {
            get { return Fields.CodClienteDesRg[this]; }
            set { Fields.CodClienteDesRg[this] = value; }
        }

        [DisplayName("Cod Cliente Des Cpf"), Expression("jCodCliente.[DES_CPF]")]
        public String CodClienteDesCpf
        {
            get { return Fields.CodClienteDesCpf[this]; }
            set { Fields.CodClienteDesCpf[this] = value; }
        }

        [DisplayName("Cod Cliente Idf Adimplente"), Expression("jCodCliente.[IDF_ADIMPLENTE]")]
        public Boolean? CodClienteIdfAdimplente
        {
            get { return Fields.CodClienteIdfAdimplente[this]; }
            set { Fields.CodClienteIdfAdimplente[this] = value; }
        }

        [DisplayName("Cod Cliente Idf Ativo"), Expression("jCodCliente.[IDF_ATIVO]")]
        public Boolean? CodClienteIdfAtivo
        {
            get { return Fields.CodClienteIdfAtivo[this]; }
            set { Fields.CodClienteIdfAtivo[this] = value; }
        }

        [DisplayName("Cod Cliente Des Endereco"), Expression("jCodCliente.[DES_ENDERECO]")]
        public String CodClienteDesEndereco
        {
            get { return Fields.CodClienteDesEndereco[this]; }
            set { Fields.CodClienteDesEndereco[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodFerias; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FeriasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodFerias;
            public Int32Field CodPlano;
            public Int32Field CodAula;
            public Int32Field CodCliente;
            public DateTimeField DatInicio;
            public DateTimeField DatFim;

            public StringField CodPlanoDesNome;
            public StringField CodPlanoIdfTipo;
            public BooleanField CodPlanoIdfAivo;

            public StringField CodAulaDesAula;
            public BooleanField CodAulaIdfTipoAtividade;
            public BooleanField CodAulaIdfAtivo;

            public Int32Field CodClienteCodBiometria;
            public StringField CodClienteDesNome;
            public StringField CodClienteDesRg;
            public StringField CodClienteDesCpf;
            public BooleanField CodClienteIdfAdimplente;
            public BooleanField CodClienteIdfAtivo;
            public StringField CodClienteDesEndereco;
        }
    }
}
