
namespace GymAction.AulaInstrutor.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AulaInstrutor"), TableName("[dbo].[AULA_INSTRUTOR]")]
    [DisplayName("Aulas vs Instrutores"), InstanceName("Aula vs Instrutor")]
    [ReadPermission("AulaInstrutor:General")]
    [ModifyPermission("AulaInstrutor:General")]
    public sealed class AulaInstrutorRow : Row, IIdRow
    {
        [DisplayName("Cod Registro"), Column("COD_REGISTRO"), Identity]
        public Int32? CodRegistro
        {
            get { return Fields.CodRegistro[this]; }
            set { Fields.CodRegistro[this] = value; }
        }

        [DisplayName("Cod Aula"), Column("COD_AULA"), PrimaryKey, ForeignKey("[dbo].[AULA]", "COD_AULA"), LeftJoin("jCodAula"), TextualField("CodAulaDesAula"), NotNull]
        [LookupEditor("Aula.Aula")]
        public Int32? CodAula
        {
            get { return Fields.CodAula[this]; }
            set { Fields.CodAula[this] = value; }
        }

        [DisplayName("Cod Instrutor"), Column("COD_INSTRUTOR"), PrimaryKey, ForeignKey("[dbo].[INSTRUTOR]", "COD_INSTRUTOR"), LeftJoin("jCodInstrutor"), TextualField("CodInstrutorDesNome"), NotNull]
        [LookupEditor("Instrutor.Instrutor")]
        public Int32? CodInstrutor
        {
            get { return Fields.CodInstrutor[this]; }
            set { Fields.CodInstrutor[this] = value; }
        }

        [DisplayName("Hor Inicio"), Column("HOR_INICIO"), Size(5), NotNull]
        public String HorInicio
        {
            get { return Fields.HorInicio[this]; }
            set { Fields.HorInicio[this] = value; }
        }

        [DisplayName("Hor Fim"), Column("HOR_FIM"), Size(5), NotNull]
        public String HorFim
        {
            get { return Fields.HorFim[this]; }
            set { Fields.HorFim[this] = value; }
        }

        [DisplayName("Idf Segunda"), Column("IDF_SEGUNDA"), NotNull]
        public Boolean? IdfSegunda
        {
            get { return Fields.IdfSegunda[this]; }
            set { Fields.IdfSegunda[this] = value; }
        }

        [DisplayName("Idf Terca"), Column("IDF_TERCA"), NotNull]
        public Boolean? IdfTerca
        {
            get { return Fields.IdfTerca[this]; }
            set { Fields.IdfTerca[this] = value; }
        }

        [DisplayName("Idf Quarta"), Column("IDF_QUARTA"), NotNull]
        public Boolean? IdfQuarta
        {
            get { return Fields.IdfQuarta[this]; }
            set { Fields.IdfQuarta[this] = value; }
        }

        [DisplayName("Idf Quinta"), Column("IDF_QUINTA"), NotNull]
        public Boolean? IdfQuinta
        {
            get { return Fields.IdfQuinta[this]; }
            set { Fields.IdfQuinta[this] = value; }
        }

        [DisplayName("Idf Sexta"), Column("IDF_SEXTA"), NotNull]
        public Boolean? IdfSexta
        {
            get { return Fields.IdfSexta[this]; }
            set { Fields.IdfSexta[this] = value; }
        }

        [DisplayName("Idf Sabado"), Column("IDF_SABADO"), NotNull]
        public Boolean? IdfSabado
        {
            get { return Fields.IdfSabado[this]; }
            set { Fields.IdfSabado[this] = value; }
        }

        [DisplayName("Idf Domingo"), Column("IDF_DOMINGO"), NotNull]
        public Boolean? IdfDomingo
        {
            get { return Fields.IdfDomingo[this]; }
            set { Fields.IdfDomingo[this] = value; }
        }

        [DisplayName("Des Sala"), Column("DES_SALA"), Size(100), NotNull]
        public String DesSala
        {
            get { return Fields.DesSala[this]; }
            set { Fields.DesSala[this] = value; }
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

        [DisplayName("Cod Instrutor Des Nome"), Expression("jCodInstrutor.[DES_NOME]"), QuickSearch]
        public String CodInstrutorDesNome
        {
            get { return Fields.CodInstrutorDesNome[this]; }
            set { Fields.CodInstrutorDesNome[this] = value; }
        }

        [DisplayName("Cod Instrutor Des Rg"), Expression("jCodInstrutor.[DES_RG]")]
        public String CodInstrutorDesRg
        {
            get { return Fields.CodInstrutorDesRg[this]; }
            set { Fields.CodInstrutorDesRg[this] = value; }
        }

        [DisplayName("Cod Instrutor Des Cpf"), Expression("jCodInstrutor.[DES_CPF]")]
        public String CodInstrutorDesCpf
        {
            get { return Fields.CodInstrutorDesCpf[this]; }
            set { Fields.CodInstrutorDesCpf[this] = value; }
        }

        [DisplayName("Cod Instrutor Idf Tipo Atividade"), Expression("jCodInstrutor.[IDF_TIPO_ATIVIDADE]")]
        public Boolean? CodInstrutorIdfTipoAtividade
        {
            get { return Fields.CodInstrutorIdfTipoAtividade[this]; }
            set { Fields.CodInstrutorIdfTipoAtividade[this] = value; }
        }

        [DisplayName("Cod Instrutor Idf Ativo"), Expression("jCodInstrutor.[IDF_ATIVO]")]
        public Boolean? CodInstrutorIdfAtivo
        {
            get { return Fields.CodInstrutorIdfAtivo[this]; }
            set { Fields.CodInstrutorIdfAtivo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodRegistro; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AulaInstrutorRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodRegistro;
            public Int32Field CodAula;
            public Int32Field CodInstrutor;
            public StringField HorInicio;
            public StringField HorFim;
            public BooleanField IdfSegunda;
            public BooleanField IdfTerca;
            public BooleanField IdfQuarta;
            public BooleanField IdfQuinta;
            public BooleanField IdfSexta;
            public BooleanField IdfSabado;
            public BooleanField IdfDomingo;
            public StringField DesSala;

            public StringField CodAulaDesAula;
            public BooleanField CodAulaIdfTipoAtividade;
            public BooleanField CodAulaIdfAtivo;

            public StringField CodInstrutorDesNome;
            public StringField CodInstrutorDesRg;
            public StringField CodInstrutorDesCpf;
            public BooleanField CodInstrutorIdfTipoAtividade;
            public BooleanField CodInstrutorIdfAtivo;
        }
    }
}
