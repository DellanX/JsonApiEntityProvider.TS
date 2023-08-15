using JsonApiDotNetCore.Resources;
using JsonApiDotNetCore.Resources.Annotations;

namespace JsonApiNet
{
    [Resource(PublicName = "readReceipts")]
    public class ReadReceipt : Identifiable<int>
    {
        [Attr]
        public DateTime CreatedAt { get; set; }

        [HasOne]
        public User? User { get; set; }

        [HasOne]
        public Message? Message { get; set; }

        public int? UserId { get; set; }
        public int? MessageId { get; set; }
    }
}
